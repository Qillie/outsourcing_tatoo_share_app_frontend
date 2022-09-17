export type TColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'color';
export type TColorSpace = 'srgb' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec-2020'

export interface IColorObject {
    type: TColorFormat
    values: (string | number)[]
    colorSpace?: TColorSpace
}