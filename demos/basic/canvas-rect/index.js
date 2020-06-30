// 获取 canvas
const canvas = document.querySelector('canvas')
// 获取 context
const context = canvas.getContext('2d')

const rectSize = [123, 246]

// 计算偏移绘制矩形
// context.rect(0.5 * canvas.width - 0.5 * rectSize[0], 0.5 * canvas.height - 0.5 * rectSize[1], ...rectSize)

// 平移画布绘制矩形后恢复画布
context.translate(-0.5 * rectSize[0], -0.5 * rectSize[1]);
context.rect(0.5 * canvas.width, 0.5 * canvas.height, ...rectSize)
context.translate(0.5 * rectSize[0], 0.5 * rectSize[1]);

context.fillStyle = 'blue';
context.fill()