#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = vec4(texture(image, texcoord).rgb,1.0);
    float red = (round(color.r * 4.0)/4.0);
    float green = (round(color.g * 4.0)/4.0);
    float blue = (round(color.b * 4.0)/4.0);
    FragColor = vec4(red,green,blue,1.0);
}
