#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texhold = texcoord * 2.0 - 1.0;
    float arctan = atan(texhold.y, texhold.x);
    float radius = length(texhold);
    vec2 offset = texhold * ((sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0);
    vec2 finaltexcoord = texcoord + offset;
    FragColor = texture(image, finaltexcoord);
}
