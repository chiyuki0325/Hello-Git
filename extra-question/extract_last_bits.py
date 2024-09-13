from PIL import Image

def extract_lsb_from_png(image_path):
    # 打开图像
    img = Image.open(image_path)
    img = img.convert("RGBA")  # 确保图像是RGBA模式

    lsb_bits = []
    width, height = img.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))

            # 跳过完全透明的像素
            if a == 0:
                continue

            # 提取每个颜色通道的最末位并添加到列表
            lsb_bits.append(r & 1)
            lsb_bits.append(g & 1)
            lsb_bits.append(b & 1)

    # 将最末位拼成字节数组
    byte_array = bytearray()

    for i in range(0, len(lsb_bits), 8):
        byte = 0
        for bit in lsb_bits[i:i + 8]:
            byte = (byte << 1) | bit
        byte_array.append(byte)

    # 打印字节数组
    with open('last_bits.bin', 'wb') as f:
        f.write(byte_array)

# 使用例子
extract_lsb_from_png('output.png')
