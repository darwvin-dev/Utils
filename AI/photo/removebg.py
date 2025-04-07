from rembg import remove
from PIL import Image

input_path = "logo.jpg"
output_path = "logo-no-bg.png"

input_image = Image.open(input_path)
output = remove(input_image)
output.save(output_path)
