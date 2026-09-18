"""Genera assets optimizados (WebP) y de marca a partir de las piezas originales.

Uso: python scripts/optimize_images.py
Entrada: "Imagenes para landing/"
Salida:  assets/
"""
import os
from PIL import Image, ImageDraw, ImageOps

SRC = "Imagenes para landing"
OUT = "assets"
MAX_W = 1600
QUALITY = 82

os.makedirs(OUT, exist_ok=True)

# nombre original -> slug de salida
MAP = {
    "LOGO.png": "logo",
    "ICONO VENTANA.png": "icono",
    "PRISMAS PUBLICIDAD 1.png": "hero",
    "dashboard.JPG": "dashboard",
    "REGISTRO COBROS ES MUY FACIL.png": "process",
    "TIEMPO REAL.png": "monitor",
    "TODA LA OPERACION EN UN SOLO LUGAR.png": "finance",
    "CASO DE USO.jpg": "security",
    "CASO DE USO  2.jpg": "usecase",
    "PROMOCION SLIDER.png": "promo",
    "PLAYSTORE.png": "playstore",
    "Compra Ahora.png": "compra",
    "PRECIOS.png": "precios",
}


def load(name):
    img = Image.open(os.path.join(SRC, name))
    return ImageOps.exif_transpose(img)


def to_webp(img, slug, max_w=MAX_W):
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA" if "A" in img.getbands() else "RGB")
    if img.width > max_w:
        h = round(img.height * max_w / img.width)
        img = img.resize((max_w, h), Image.LANCZOS)
    path = os.path.join(OUT, slug + ".webp")
    img.save(path, "WEBP", quality=QUALITY, method=6)
    return path, img.size


def solid_png(img, slug, size):
    big = img.copy()
    big.thumbnail((size, size), Image.LANCZOS)
    if big.mode != "RGBA":
        big = big.convert("RGBA")
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(big, ((size - big.width) // 2, (size - big.height) // 2), big)
    path = os.path.join(OUT, slug + ".png")
    canvas.save(path, "PNG", optimize=True)
    return path


def gradient(size, top, bottom):
    w, h = size
    base = Image.new("RGB", (1, h))
    px = base.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        px[0, y] = (
            round(top[0] + (bottom[0] - top[0]) * t),
            round(top[1] + (bottom[1] - top[1]) * t),
            round(top[2] + (bottom[2] - top[2]) * t),
        )
    return base.resize((w, h))


def make_og(logo):
    w, h = 1200, 630
    bg = gradient((w, h), (0, 18, 60), (0, 80, 240)).convert("RGBA")
    # halo luminoso
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([w - 420, -180, w + 220, 420], fill=(0, 216, 255, 60))
    bg = Image.alpha_composite(bg, glow)
    mark = logo.copy()
    mark.thumbnail((360, 360), Image.LANCZOS)
    bg.paste(mark, ((w - mark.width) // 2, (h - mark.height) // 2),
             mark if mark.mode == "RGBA" else None)
    path = os.path.join(OUT, "og-image.png")
    bg.convert("RGB").save(path, "PNG", optimize=True)
    return path


def main():
    made = []
    for name, slug in MAP.items():
        if not os.path.exists(os.path.join(SRC, name)):
            print("skip (no existe):", name)
            continue
        img = load(name)
        cap = 512 if slug == "logo" else MAX_W
        p, size = to_webp(img, slug, cap)
        made.append((p, size, os.path.getsize(p)))
        print(f"{slug:10} {size[0]}x{size[1]:<6} -> {os.path.getsize(p)//1024} KB")

    logo = load("LOGO.png")
    solid_png(logo, "logo", 512)

    icon = load("ICONO VENTANA.png")
    for s in (64, 180, 192, 512):
        solid_png(icon, f"icon-{s}", s)

    print(make_og(logo))
    print("OK")


if __name__ == "__main__":
    main()
