from PIL import Image
img = Image.open('dist/assets/OTTYHOLIDAY_007.png')
img.save('dist/assets/OTTYHOLIDAY_007_optimized.png', optimize=True, quality=85)
