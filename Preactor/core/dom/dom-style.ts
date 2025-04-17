export class DomStyleWrapper {
  #domStyle: CS.Preactor.DomStyle;

  constructor(domStyle: CS.Preactor.DomStyle) {
    this.#domStyle = domStyle;

    return new Proxy(this, {
      set(target, prop, value) {
        target.setProperty(prop as string, value);
        return true;
      },
      get(target, prop) {
        return (target as any)[prop];
      }
    });
  }

  setProperty(name: string, value: any) {
    this.#domStyle.SetProperty(name, value);
  }
}

export interface DomStyleWrapper {
  alignContent: StyleEnum<Align> | Align | string | null | number;
  alignItems: StyleEnum<Align> | Align | string | null | number;
  alignSelf: StyleEnum<Align> | Align | string | null | number;
  backgroundColor: StyleColor | Color | string | null | number[] | float4;
  backgroundImage: StyleBackground | Background | string | null | Sprite | Texture;
  backgroundSize: StyleBackgroundSize | BackgroundSize | string | null;
  backgroundRepeat: StyleBackgroundRepeat | BackgroundRepeat | string | null;
  backgroundPosition: StyleBackgroundPosition | BackgroundPosition | string | null;
  backgroundPositionX: StyleBackgroundPosition | BackgroundPosition | string | null;
  backgroundPositionY: StyleBackgroundPosition | BackgroundPosition | string | null;
  borderColor: StyleColor | Color | string | null | Color[] | number[] | float4;
  borderWidth: StyleFloat | number | string | null | number[];
  borderRadius: StyleLength | Length | string | null | number | number[];
  borderBottomColor: StyleColor | Color | string | null | number[] | float4;
  borderTopColor: StyleColor | Color | string | null | number[] | float4;
  borderLeftColor: StyleColor | Color | string | null | number[] | float4;
  borderRightColor: StyleColor | Color | string | null | number[] | float4;
  borderBottomWidth: StyleFloat | number | string | null;
  borderTopWidth: StyleFloat | number | string | null;
  borderLeftWidth: StyleFloat | number | string | null;
  borderRightWidth: StyleFloat | number | string | null;
  borderTopLeftRadius: StyleLength | Length | string | null | number;
  borderTopRightRadius: StyleLength | Length | string | null | number;
  borderBottomRightRadius: StyleLength | Length | string | null | number;
  borderBottomLeftRadius: StyleLength | Length | string | null | number;
  bottom: StyleLength | Length | string | null | number;
  color: StyleColor | Color | string | null | number[] | float4;
  cursor: StyleCursor | Cursor | null;
  display: StyleEnum<DisplayStyle> | DisplayStyle | string | null | number;
  flexBasis: StyleLength | Length | string | null | number;
  flexDirection: StyleEnum<FlexDirection> | FlexDirection | string | null | number;
  flexGrow: StyleFloat | number | string | null;
  flexShrink: StyleFloat | number | string | null;
  flexWrap: StyleEnum<Wrap> | Wrap | string | null | number;
  fontSize: StyleLength | Length | string | null | number;
  height: StyleLength | Length | string | null | number;
  justifyContent: StyleEnum<Justify> | Justify | string | null | number;
  left: StyleLength | Length | string | null | number;
  letterSpacing: StyleLength | Length | string | null | number;
  margin: StyleLength | Length | string | null | number[] | number;
  marginBottom: StyleLength | Length | string | null | number;
  marginLeft: StyleLength | Length | string | null | number;
  marginRight: StyleLength | Length | string | null | number;
  marginTop: StyleLength | Length | string | null | number;
  maxHeight: StyleLength | Length | string | null | number;
  maxWidth: StyleLength | Length | string | null | number;
  minHeight: StyleLength | Length | string | null | number;
  minWidth: StyleLength | Length | string | null | number;
  opacity: StyleFloat | number | string | null | number;
  overflow: StyleEnum<Overflow> | Overflow | string | null | number;
  padding: StyleLength | Length | string | null | number[] | number;
  paddingBottom: StyleLength | Length | string | null | number;
  paddingLeft: StyleLength | Length | string | null | number;
  paddingRight: StyleLength | Length | string | null | number;
  paddingTop: StyleLength | Length | string | null | number;
  position: StyleEnum<Position> | Position | string | null | number;
  right: StyleLength | Length | string | null | number;
  rotate: StyleRotate | Rotate | string | null | number;
  scale: StyleScale | Scale | string | null | number | number[] | float2;
  textOverflow: StyleEnum<TextOverflow> | TextOverflow | string | null | number;
  textShadow: StyleTextShadow | TextShadow | string | null;
  top: StyleLength | Length | string | null | number;
  transformOrigin: StyleTransformOrigin | TransformOrigin | string | string[] | null | number[] | float2;
  transitionDelay: StyleList<TimeValue> | TimeValue | string | null | string[] | number | number[];
  transitionDuration: StyleList<TimeValue> | TimeValue | string | null | string[] | number | number[];
  transitionProperty: StyleList<StylePropertyName> | StylePropertyName | string | null | string[];
  transitionTimingFunction: StyleList<EasingFunction> | EasingFunction | string | null | string[];
  translate: StyleTranslate | Translate | string | null | Vector2 | Vector3 | number[];
  unityBackgroundImageTintColor: StyleColor | Color | string | null | number[] | float4;
  unityBackgroundScaleMode: StyleEnum<ScaleMode> | ScaleMode | string | null | number;
  unityFont: StyleFont | Font | string | null;
  unityFontDefinition: StyleFontDefinition | FontDefinition | string | null;
  unityFontStyleAndWeight: StyleEnum<FontStyle> | FontStyle | string | null | number;
  unityOverflowClipBox: StyleEnum<OverflowClipBox> | OverflowClipBox | string | null | number;
  unityParagraphSpacing: StyleLength | Length | string | null | number;
  unitySliceBottom: StyleInt | number | string | null;
  unitySliceLeft: StyleInt | number | string | null;
  unitySliceRight: StyleInt | number | string | null;
  unitySliceTop: StyleInt | number | string | null;
  unitySliceScale: StyleFloat | number | string | null;
  unityTextAlign: StyleEnum<TextAnchor> | TextAnchor | string | null | number;
  unityTextOutlineColor: StyleColor | Color | string | null | number[] | float4;
  unityTextOutlineWidth: StyleFloat | number | string | null;
  unityTextOverflowPosition: StyleEnum<TextOverflowPosition> | TextOverflowPosition | string | null | number;
  visibility: StyleEnum<Visibility> | Visibility | string | null | number;
  whiteSpace: StyleEnum<WhiteSpace> | WhiteSpace | string | null | number;
  width: StyleLength | Length | string | null | number;
  wordSpacing: StyleLength | Length | string | null | number;
}
