const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

// 顶点着色器
const vertex = `
  attribute vec2 position;

  void main() {
    gl_PointSize = 1.0;
    gl_Position = vec4(position, 1.0, 1.0);
  }
`;
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertex);
gl.compileShader(vertexShader);

// 片元着色器
const fragment = `
  precision mediump float;

  void main()
  {
    gl_FragColor = vec4(0.0, 0.5, 0.0, 1.0);
  }    
`;
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragment);
gl.compileShader(fragmentShader);

// 两个着色器关联到 WebGL 程序
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
// 启用 WebGLPrgame 对象
gl.useProgram(program);

// 使用类型化数组存储三角形顶点坐标
const points = new Float32Array([
    -1, -1,
    0, 1,
    1, -1,
]);

// 数据写入 WebGL 的缓冲区
// 1. 创建缓存对象
const bufferId = gl.createBuffer();
// 2. 将缓存对象绑定为当前操作对象
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
// 3. 顶点坐标数据写入缓存对象
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

// 将缓冲区数据读取到 GPU
// 1. 获取顶点着色器中的position变量的地址
const vPosition = gl.getAttribLocation(program, 'position');
// 2. 给变量设置长度和类型
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
// 3. 激活变量
gl.enableVertexAttribArray(vPosition);

// 清除当前画布内容
gl.clear(gl.COLOR_BUFFER_BIT);
// 以三角形为图元绘制
gl.drawArrays(gl.TRIANGLES, 0, points.length / 2);
// 以线圈为图元绘制（不填充,只描边）
// gl.drawArrays(gl.LINE_LOOP, 0, points.length / 2);