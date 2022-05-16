#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texhold = texcoord * 2.0 - 1.0;
    float arctan = atan(texhold.y, texhold.x);
    float radius = pow(length(texhold),1.5);
    vec2 fisheye = vec2(radius * cos(arctan), radius * sin(arctan));
    vec2 finaltexcoord = 0.5 * (fisheye + 1.0);
    FragColor = texture(image, finaltexcoord);
}
