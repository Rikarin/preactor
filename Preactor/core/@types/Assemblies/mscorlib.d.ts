declare namespace CS {
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
            public GetType () : System.Type
            public ToString () : string
            public static ReferenceEquals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class String extends System.Object implements System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static Empty : string
            public get Length(): number;
            public get Chars(): number;
            public static Compare ($strA: string, $strB: string) : number
            public static Compare ($strA: string, $strB: string, $ignoreCase: boolean) : number
            public static Compare ($strA: string, $strB: string, $comparisonType: System.StringComparison) : number
            public static Compare ($strA: string, $strB: string, $culture: System.Globalization.CultureInfo, $options: System.Globalization.CompareOptions) : number
            public static Compare ($strA: string, $strB: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $ignoreCase: boolean) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $culture: System.Globalization.CultureInfo, $options: System.Globalization.CompareOptions) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $comparisonType: System.StringComparison) : number
            public static CompareOrdinal ($strA: string, $strB: string) : number
            public static CompareOrdinal ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number) : number
            public CompareTo ($value: any) : number
            public CompareTo ($strB: string) : number
            public EndsWith ($value: string) : boolean
            public EndsWith ($value: string, $comparisonType: System.StringComparison) : boolean
            public EndsWith ($value: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : boolean
            public EndsWith ($value: number) : boolean
            public Equals ($obj: any) : boolean
            public Equals ($value: string) : boolean
            public Equals ($value: string, $comparisonType: System.StringComparison) : boolean
            public static Equals ($a: string, $b: string) : boolean
            public static Equals ($a: string, $b: string, $comparisonType: System.StringComparison) : boolean
            public static op_Equality ($a: string, $b: string) : boolean
            public static op_Inequality ($a: string, $b: string) : boolean
            public GetHashCode () : number
            public GetHashCode ($comparisonType: System.StringComparison) : number
            public StartsWith ($value: string) : boolean
            public StartsWith ($value: string, $comparisonType: System.StringComparison) : boolean
            public StartsWith ($value: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : boolean
            public StartsWith ($value: number) : boolean
            public Clone () : any
            public static Copy ($str: string) : string
            public CopyTo ($sourceIndex: number, $destination: System.Array$1<number>, $destinationIndex: number, $count: number) : void
            public ToCharArray () : System.Array$1<number>
            public ToCharArray ($startIndex: number, $length: number) : System.Array$1<number>
            public static IsNullOrEmpty ($value: string) : boolean
            public static IsNullOrWhiteSpace ($value: string) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public GetEnumerator () : System.CharEnumerator
            public GetTypeCode () : System.TypeCode
            public IsNormalized () : boolean
            public IsNormalized ($normalizationForm: System.Text.NormalizationForm) : boolean
            public Normalize () : string
            public Normalize ($normalizationForm: System.Text.NormalizationForm) : string
            public static Concat ($arg0: any) : string
            public static Concat ($arg0: any, $arg1: any) : string
            public static Concat ($arg0: any, $arg1: any, $arg2: any) : string
            public static Concat (...args: any[]) : string
            public static Concat ($values: System.Collections.Generic.IEnumerable$1<string>) : string
            public static Concat ($str0: string, $str1: string) : string
            public static Concat ($str0: string, $str1: string, $str2: string) : string
            public static Concat ($str0: string, $str1: string, $str2: string, $str3: string) : string
            public static Concat (...values: string[]) : string
            public static Format ($format: string, $arg0: any) : string
            public static Format ($format: string, $arg0: any, $arg1: any) : string
            public static Format ($format: string, $arg0: any, $arg1: any, $arg2: any) : string
            public static Format ($format: string, ...args: any[]) : string
            public static Format ($provider: System.IFormatProvider, $format: string, $arg0: any) : string
            public static Format ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any) : string
            public static Format ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any, $arg2: any) : string
            public static Format ($provider: System.IFormatProvider, $format: string, ...args: any[]) : string
            public Insert ($startIndex: number, $value: string) : string
            public static Join ($separator: number, ...value: string[]) : string
            public static Join ($separator: number, ...values: any[]) : string
            public static Join ($separator: number, $value: System.Array$1<string>, $startIndex: number, $count: number) : string
            public static Join ($separator: string, ...value: string[]) : string
            public static Join ($separator: string, ...values: any[]) : string
            public static Join ($separator: string, $values: System.Collections.Generic.IEnumerable$1<string>) : string
            public static Join ($separator: string, $value: System.Array$1<string>, $startIndex: number, $count: number) : string
            public PadLeft ($totalWidth: number) : string
            public PadLeft ($totalWidth: number, $paddingChar: number) : string
            public PadRight ($totalWidth: number) : string
            public PadRight ($totalWidth: number, $paddingChar: number) : string
            public Remove ($startIndex: number, $count: number) : string
            public Remove ($startIndex: number) : string
            public Replace ($oldValue: string, $newValue: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : string
            public Replace ($oldValue: string, $newValue: string, $comparisonType: System.StringComparison) : string
            public Replace ($oldChar: number, $newChar: number) : string
            public Replace ($oldValue: string, $newValue: string) : string
            public Split ($separator: number, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: number, $count: number, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split (...separator: number[]) : System.Array$1<string>
            public Split ($separator: System.Array$1<number>, $count: number) : System.Array$1<string>
            public Split ($separator: System.Array$1<number>, $options: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: System.Array$1<number>, $count: number, $options: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: string, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: string, $count: number, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: System.Array$1<string>, $options: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: System.Array$1<string>, $count: number, $options: System.StringSplitOptions) : System.Array$1<string>
            public Substring ($startIndex: number) : string
            public Substring ($startIndex: number, $length: number) : string
            public ToLower () : string
            public ToLower ($culture: System.Globalization.CultureInfo) : string
            public ToLowerInvariant () : string
            public ToUpper () : string
            public ToUpper ($culture: System.Globalization.CultureInfo) : string
            public ToUpperInvariant () : string
            public Trim () : string
            public Trim ($trimChar: number) : string
            public Trim (...trimChars: number[]) : string
            public TrimStart () : string
            public TrimStart ($trimChar: number) : string
            public TrimStart (...trimChars: number[]) : string
            public TrimEnd () : string
            public TrimEnd ($trimChar: number) : string
            public TrimEnd (...trimChars: number[]) : string
            public Contains ($value: string) : boolean
            public Contains ($value: string, $comparisonType: System.StringComparison) : boolean
            public Contains ($value: number) : boolean
            public Contains ($value: number, $comparisonType: System.StringComparison) : boolean
            public IndexOf ($value: number) : number
            public IndexOf ($value: number, $startIndex: number) : number
            public IndexOf ($value: number, $comparisonType: System.StringComparison) : number
            public IndexOf ($value: number, $startIndex: number, $count: number) : number
            public IndexOfAny ($anyOf: System.Array$1<number>) : number
            public IndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number) : number
            public IndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number, $count: number) : number
            public IndexOf ($value: string) : number
            public IndexOf ($value: string, $startIndex: number) : number
            public IndexOf ($value: string, $startIndex: number, $count: number) : number
            public IndexOf ($value: string, $comparisonType: System.StringComparison) : number
            public IndexOf ($value: string, $startIndex: number, $comparisonType: System.StringComparison) : number
            public IndexOf ($value: string, $startIndex: number, $count: number, $comparisonType: System.StringComparison) : number
            public LastIndexOf ($value: number) : number
            public LastIndexOf ($value: number, $startIndex: number) : number
            public LastIndexOf ($value: number, $startIndex: number, $count: number) : number
            public LastIndexOfAny ($anyOf: System.Array$1<number>) : number
            public LastIndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number) : number
            public LastIndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number, $count: number) : number
            public LastIndexOf ($value: string) : number
            public LastIndexOf ($value: string, $startIndex: number) : number
            public LastIndexOf ($value: string, $startIndex: number, $count: number) : number
            public LastIndexOf ($value: string, $comparisonType: System.StringComparison) : number
            public LastIndexOf ($value: string, $startIndex: number, $comparisonType: System.StringComparison) : number
            public LastIndexOf ($value: string, $startIndex: number, $count: number, $comparisonType: System.StringComparison) : number
            public static Concat ($arg0: any, $arg1: any, $arg2: any, $arg3: any) : string
            public get_Chars ($index: number) : number
            public static Intern ($str: string) : string
            public static IsInterned ($str: string) : string
            public constructor ($value: System.Array$1<number>)
            public constructor ($value: System.Array$1<number>, $startIndex: number, $length: number)
            public constructor ($c: number, $count: number)
            public GetEnumerator () : System.Collections.IEnumerator
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        interface String {
            AsMemory () : System.ReadOnlyMemory$1<number>;
            AsMemory ($start: number) : System.ReadOnlyMemory$1<number>;
            AsMemory ($startIndex: System.Index) : System.ReadOnlyMemory$1<number>;
            AsMemory ($start: number, $length: number) : System.ReadOnlyMemory$1<number>;
            AsMemory ($range: System.Range) : System.ReadOnlyMemory$1<number>;
        }
        interface IEquatable$1<T>
        {
            Equals ($other: T) : boolean
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Char extends System.ValueType implements System.IEquatable$1<number>, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : number
            public static MinValue : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public static ToString ($c: number) : string
            public static Parse ($s: string) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static IsDigit ($c: number) : boolean
            public static IsLetter ($c: number) : boolean
            public static IsWhiteSpace ($c: number) : boolean
            public static IsUpper ($c: number) : boolean
            public static IsLower ($c: number) : boolean
            public static IsPunctuation ($c: number) : boolean
            public static IsLetterOrDigit ($c: number) : boolean
            public static ToUpper ($c: number, $culture: System.Globalization.CultureInfo) : number
            public static ToUpper ($c: number) : number
            public static ToUpperInvariant ($c: number) : number
            public static ToLower ($c: number, $culture: System.Globalization.CultureInfo) : number
            public static ToLower ($c: number) : number
            public static ToLowerInvariant ($c: number) : number
            public GetTypeCode () : System.TypeCode
            public static IsControl ($c: number) : boolean
            public static IsControl ($s: string, $index: number) : boolean
            public static IsDigit ($s: string, $index: number) : boolean
            public static IsLetter ($s: string, $index: number) : boolean
            public static IsLetterOrDigit ($s: string, $index: number) : boolean
            public static IsLower ($s: string, $index: number) : boolean
            public static IsNumber ($c: number) : boolean
            public static IsNumber ($s: string, $index: number) : boolean
            public static IsPunctuation ($s: string, $index: number) : boolean
            public static IsSeparator ($c: number) : boolean
            public static IsSeparator ($s: string, $index: number) : boolean
            public static IsSurrogate ($c: number) : boolean
            public static IsSurrogate ($s: string, $index: number) : boolean
            public static IsSymbol ($c: number) : boolean
            public static IsSymbol ($s: string, $index: number) : boolean
            public static IsUpper ($s: string, $index: number) : boolean
            public static IsWhiteSpace ($s: string, $index: number) : boolean
            public static GetUnicodeCategory ($c: number) : System.Globalization.UnicodeCategory
            public static GetUnicodeCategory ($s: string, $index: number) : System.Globalization.UnicodeCategory
            public static GetNumericValue ($c: number) : number
            public static GetNumericValue ($s: string, $index: number) : number
            public static IsHighSurrogate ($c: number) : boolean
            public static IsHighSurrogate ($s: string, $index: number) : boolean
            public static IsLowSurrogate ($c: number) : boolean
            public static IsLowSurrogate ($s: string, $index: number) : boolean
            public static IsSurrogatePair ($s: string, $index: number) : boolean
            public static IsSurrogatePair ($highSurrogate: number, $lowSurrogate: number) : boolean
            public static ConvertFromUtf32 ($utf32: number) : string
            public static ConvertToUtf32 ($highSurrogate: number, $lowSurrogate: number) : number
            public static ConvertToUtf32 ($s: string, $index: number) : number
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface IComparable
        {
            CompareTo ($obj: any) : number
        }
        interface IComparable$1<T>
        {
            CompareTo ($other: T) : number
        }
        interface IConvertible
        {
            GetTypeCode () : System.TypeCode
            ToBoolean ($provider: System.IFormatProvider) : boolean
            ToChar ($provider: System.IFormatProvider) : number
            ToSByte ($provider: System.IFormatProvider) : number
            ToByte ($provider: System.IFormatProvider) : number
            ToInt16 ($provider: System.IFormatProvider) : number
            ToUInt16 ($provider: System.IFormatProvider) : number
            ToInt32 ($provider: System.IFormatProvider) : number
            ToUInt32 ($provider: System.IFormatProvider) : number
            ToInt64 ($provider: System.IFormatProvider) : bigint
            ToUInt64 ($provider: System.IFormatProvider) : bigint
            ToSingle ($provider: System.IFormatProvider) : number
            ToDouble ($provider: System.IFormatProvider) : number
            ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            ToString ($provider: System.IFormatProvider) : string
            ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
        }
        interface ICloneable
        {
            Clone () : any
        }
        class Int32 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface IFormattable
        {
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        interface ISpanFormattable
        {
        }
        class Boolean extends System.ValueType implements System.IEquatable$1<boolean>, System.IComparable, System.IComparable$1<boolean>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static TrueString : string
            public static FalseString : string
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public Equals ($obj: any) : boolean
            public Equals ($obj: boolean) : boolean
            public CompareTo ($obj: any) : number
            public CompareTo ($value: boolean) : number
            public static Parse ($value: string) : boolean
            public static TryParse ($value: string, $result: $Ref<boolean>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static Parse ($enumType: System.Type, $value: string) : any
            public static Parse ($enumType: System.Type, $value: string, $ignoreCase: boolean) : any
            public static GetUnderlyingType ($enumType: System.Type) : System.Type
            public static GetValues ($enumType: System.Type) : System.Array
            public static GetName ($enumType: System.Type, $value: any) : string
            public static GetNames ($enumType: System.Type) : System.Array$1<string>
            public static ToObject ($enumType: System.Type, $value: any) : any
            public static IsDefined ($enumType: System.Type, $value: any) : boolean
            public static Format ($enumType: System.Type, $value: any, $format: string) : string
            public ToString () : string
            public CompareTo ($target: any) : number
            public ToString ($format: string) : string
            public HasFlag ($flag: System.Enum) : boolean
            public GetTypeCode () : System.TypeCode
            public static ToObject ($enumType: System.Type, $value: number) : any
            public static ToObject ($enumType: System.Type, $value: bigint) : any
            public static TryParse ($enumType: System.Type, $value: string, $ignoreCase: boolean, $result: $Ref<any>) : boolean
            public static TryParse ($enumType: System.Type, $value: string, $result: $Ref<any>) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToString ($provider: System.IFormatProvider) : string
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
        }
        enum StringComparison
        { CurrentCulture = 0, CurrentCultureIgnoreCase = 1, InvariantCulture = 2, InvariantCultureIgnoreCase = 3, Ordinal = 4, OrdinalIgnoreCase = 5 }
        interface IFormatProvider
        {
            GetFormat ($formatType: System.Type) : any
        }
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Method(): System.Reflection.MethodInfo;
            public get Target(): any;
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean) : Function
            public DynamicInvoke (...args: any[]) : any
            public Clone () : any
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetInvocationList () : System.Array$1<Function>
            public static Combine ($a: Function, $b: Function) : Function
            public static Combine (...delegates: Function[]) : Function
            public static Remove ($source: Function, $value: Function) : Function
            public static RemoveAll ($source: Function, $value: Function) : Function
            public static op_Equality ($d1: Function, $d2: Function) : boolean
            public static op_Inequality ($d1: Function, $d2: Function) : boolean
        }
        interface MulticastDelegate
        { 
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
        }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Span$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Length(): number;
            public get IsEmpty(): boolean;
            public get_Item ($index: number) : $Ref<T>
            public GetPinnableReference () : $Ref<T>
            public Clear () : void
            public Fill ($value: T) : void
            public ToArray () : System.Array$1<T>
            public constructor ($array: System.Array$1<T>)
            public constructor ($array: System.Array$1<T>, $start: number, $length: number)
            public constructor ()
        }
        class ReadOnlySpan$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Length(): number;
            public get IsEmpty(): boolean;
            public get_Item ($index: number) : $Ref<T>
            public GetPinnableReference () : $Ref<T>
            public ToArray () : System.Array$1<T>
            public constructor ($array: System.Array$1<T>)
            public constructor ($array: System.Array$1<T>, $start: number, $length: number)
            public constructor ()
        }
        class Array extends System.Object implements System.Collections.IEnumerable, System.ICloneable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get LongLength(): bigint;
            public get IsFixedSize(): boolean;
            public get IsReadOnly(): boolean;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public get Length(): number;
            public get Rank(): number;
            public get Count(): number;
            public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
            public CopyTo ($array: System.Array, $index: number) : void
            public Clone () : any
            public static BinarySearch ($array: System.Array, $value: any) : number
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
            public CopyTo ($array: System.Array, $index: bigint) : void
            public GetLongLength ($dimension: number) : bigint
            public GetValue ($index: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
            public GetValue (...indices: bigint[]) : any
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
            public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
            public static IndexOf ($array: System.Array, $value: any) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static LastIndexOf ($array: System.Array, $value: any) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static Reverse ($array: System.Array) : void
            public static Reverse ($array: System.Array, $index: number, $length: number) : void
            public SetValue ($value: any, $index: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
            public SetValue ($value: any, ...indices: bigint[]) : void
            public static Sort ($array: System.Array) : void
            public static Sort ($array: System.Array, $index: number, $length: number) : void
            public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array) : void
            public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public GetLength ($dimension: number) : number
            public GetLowerBound ($dimension: number) : number
            public GetValue (...indices: number[]) : any
            public SetValue ($value: any, ...indices: number[]) : void
            public GetUpperBound ($dimension: number) : number
            public GetValue ($index: number) : any
            public GetValue ($index1: number, $index2: number) : any
            public GetValue ($index1: number, $index2: number, $index3: number) : any
            public SetValue ($value: any, $index: number) : void
            public SetValue ($value: any, $index1: number, $index2: number) : void
            public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
            public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
            public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
            public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
            public static Clear ($array: System.Array, $index: number, $length: number) : void
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public Initialize () : void
            public get_Item ($index: number) : any
            public set_Item ($index: number, $value: any) : void
            public Add ($value: any) : number
            public Contains ($value: any) : boolean
            public Clear () : void
            public IndexOf ($value: any) : number
            public Insert ($index: number, $value: any) : void
            public Remove ($value: any) : void
            public RemoveAt ($index: number) : void
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
        }
        class CharEnumerator extends System.Object implements System.Collections.Generic.IEnumerator$1<number>, System.Collections.IEnumerator, System.ICloneable, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public get Current(): number;
            public Clone () : any
            public MoveNext () : boolean
            public Dispose () : void
            public Reset () : void
        }
        interface IDisposable
        {
            Dispose () : void
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        enum StringSplitOptions
        { None = 0, RemoveEmptyEntries = 1 }
        class TimeZoneInfo extends System.Object implements System.IEquatable$1<System.TimeZoneInfo>, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Id(): string;
            public get DisplayName(): string;
            public get StandardName(): string;
            public get DaylightName(): string;
            public get BaseUtcOffset(): System.TimeSpan;
            public get SupportsDaylightSavingTime(): boolean;
            public static get Local(): System.TimeZoneInfo;
            public static get Utc(): System.TimeZoneInfo;
            public GetAdjustmentRules () : System.Array$1<System.TimeZoneInfo.AdjustmentRule>
            public static FindSystemTimeZoneById ($id: string) : System.TimeZoneInfo
            public GetAmbiguousTimeOffsets ($dateTimeOffset: System.DateTimeOffset) : System.Array$1<System.TimeSpan>
            public GetAmbiguousTimeOffsets ($dateTime: System.DateTime) : System.Array$1<System.TimeSpan>
            public GetUtcOffset ($dateTimeOffset: System.DateTimeOffset) : System.TimeSpan
            public GetUtcOffset ($dateTime: System.DateTime) : System.TimeSpan
            public IsAmbiguousTime ($dateTimeOffset: System.DateTimeOffset) : boolean
            public IsAmbiguousTime ($dateTime: System.DateTime) : boolean
            public IsDaylightSavingTime ($dateTimeOffset: System.DateTimeOffset) : boolean
            public IsDaylightSavingTime ($dateTime: System.DateTime) : boolean
            public IsInvalidTime ($dateTime: System.DateTime) : boolean
            public static ClearCachedData () : void
            public static ConvertTimeBySystemTimeZoneId ($dateTimeOffset: System.DateTimeOffset, $destinationTimeZoneId: string) : System.DateTimeOffset
            public static ConvertTimeBySystemTimeZoneId ($dateTime: System.DateTime, $destinationTimeZoneId: string) : System.DateTime
            public static ConvertTimeBySystemTimeZoneId ($dateTime: System.DateTime, $sourceTimeZoneId: string, $destinationTimeZoneId: string) : System.DateTime
            public static ConvertTime ($dateTimeOffset: System.DateTimeOffset, $destinationTimeZone: System.TimeZoneInfo) : System.DateTimeOffset
            public static ConvertTime ($dateTime: System.DateTime, $destinationTimeZone: System.TimeZoneInfo) : System.DateTime
            public static ConvertTime ($dateTime: System.DateTime, $sourceTimeZone: System.TimeZoneInfo, $destinationTimeZone: System.TimeZoneInfo) : System.DateTime
            public static ConvertTimeFromUtc ($dateTime: System.DateTime, $destinationTimeZone: System.TimeZoneInfo) : System.DateTime
            public static ConvertTimeToUtc ($dateTime: System.DateTime) : System.DateTime
            public static ConvertTimeToUtc ($dateTime: System.DateTime, $sourceTimeZone: System.TimeZoneInfo) : System.DateTime
            public Equals ($other: System.TimeZoneInfo) : boolean
            public Equals ($obj: any) : boolean
            public static FromSerializedString ($source: string) : System.TimeZoneInfo
            public static GetSystemTimeZones () : System.Collections.ObjectModel.ReadOnlyCollection$1<System.TimeZoneInfo>
            public HasSameRules ($other: System.TimeZoneInfo) : boolean
            public ToSerializedString () : string
            public static CreateCustomTimeZone ($id: string, $baseUtcOffset: System.TimeSpan, $displayName: string, $standardDisplayName: string) : System.TimeZoneInfo
            public static CreateCustomTimeZone ($id: string, $baseUtcOffset: System.TimeSpan, $displayName: string, $standardDisplayName: string, $daylightDisplayName: string, $adjustmentRules: System.Array$1<System.TimeZoneInfo.AdjustmentRule>) : System.TimeZoneInfo
            public static CreateCustomTimeZone ($id: string, $baseUtcOffset: System.TimeSpan, $displayName: string, $standardDisplayName: string, $daylightDisplayName: string, $adjustmentRules: System.Array$1<System.TimeZoneInfo.AdjustmentRule>, $disableDaylightSavingTime: boolean) : System.TimeZoneInfo
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class TimeSpan extends System.ValueType implements System.IEquatable$1<System.TimeSpan>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.TimeSpan>
        {
            protected [__keep_incompatibility]: never;
            public static TicksPerMillisecond : bigint
            public static TicksPerSecond : bigint
            public static TicksPerMinute : bigint
            public static TicksPerHour : bigint
            public static TicksPerDay : bigint
            public static Zero : System.TimeSpan
            public static MaxValue : System.TimeSpan
            public static MinValue : System.TimeSpan
            public get Ticks(): bigint;
            public get Days(): number;
            public get Hours(): number;
            public get Milliseconds(): number;
            public get Minutes(): number;
            public get Seconds(): number;
            public get TotalDays(): number;
            public get TotalHours(): number;
            public get TotalMilliseconds(): number;
            public get TotalMinutes(): number;
            public get TotalSeconds(): number;
            public Add ($ts: System.TimeSpan) : System.TimeSpan
            public static Compare ($t1: System.TimeSpan, $t2: System.TimeSpan) : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.TimeSpan) : number
            public static FromDays ($value: number) : System.TimeSpan
            public Duration () : System.TimeSpan
            public Equals ($value: any) : boolean
            public Equals ($obj: System.TimeSpan) : boolean
            public static Equals ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static FromHours ($value: number) : System.TimeSpan
            public static FromMilliseconds ($value: number) : System.TimeSpan
            public static FromMinutes ($value: number) : System.TimeSpan
            public Negate () : System.TimeSpan
            public static FromSeconds ($value: number) : System.TimeSpan
            public Subtract ($ts: System.TimeSpan) : System.TimeSpan
            public Multiply ($factor: number) : System.TimeSpan
            public Divide ($divisor: number) : System.TimeSpan
            public Divide ($ts: System.TimeSpan) : number
            public static FromTicks ($value: bigint) : System.TimeSpan
            public static Parse ($s: string) : System.TimeSpan
            public static Parse ($input: string, $formatProvider: System.IFormatProvider) : System.TimeSpan
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider) : System.TimeSpan
            public static ParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider) : System.TimeSpan
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles) : System.TimeSpan
            public static ParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles) : System.TimeSpan
            public static TryParse ($s: string, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParse ($input: string, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static op_UnaryNegation ($t: System.TimeSpan) : System.TimeSpan
            public static op_Subtraction ($t1: System.TimeSpan, $t2: System.TimeSpan) : System.TimeSpan
            public static op_UnaryPlus ($t: System.TimeSpan) : System.TimeSpan
            public static op_Addition ($t1: System.TimeSpan, $t2: System.TimeSpan) : System.TimeSpan
            public static op_Multiply ($timeSpan: System.TimeSpan, $factor: number) : System.TimeSpan
            public static op_Multiply ($factor: number, $timeSpan: System.TimeSpan) : System.TimeSpan
            public static op_Division ($timeSpan: System.TimeSpan, $divisor: number) : System.TimeSpan
            public static op_Division ($t1: System.TimeSpan, $t2: System.TimeSpan) : number
            public static op_Equality ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_Inequality ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_LessThan ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_LessThanOrEqual ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_GreaterThan ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_GreaterThanOrEqual ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public constructor ($ticks: bigint)
            public constructor ($hours: number, $minutes: number, $seconds: number)
            public constructor ($days: number, $hours: number, $minutes: number, $seconds: number)
            public constructor ($days: number, $hours: number, $minutes: number, $seconds: number, $milliseconds: number)
            public CompareTo ($obj: any) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class DateTimeOffset extends System.ValueType implements System.IEquatable$1<System.DateTimeOffset>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.Runtime.Serialization.IDeserializationCallback, System.IComparable$1<System.DateTimeOffset>, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public static MinValue : System.DateTimeOffset
            public static MaxValue : System.DateTimeOffset
            public static UnixEpoch : System.DateTimeOffset
            public static get Now(): System.DateTimeOffset;
            public static get UtcNow(): System.DateTimeOffset;
            public get DateTime(): System.DateTime;
            public get UtcDateTime(): System.DateTime;
            public get LocalDateTime(): System.DateTime;
            public get Date(): System.DateTime;
            public get Day(): number;
            public get DayOfWeek(): System.DayOfWeek;
            public get DayOfYear(): number;
            public get Hour(): number;
            public get Millisecond(): number;
            public get Minute(): number;
            public get Month(): number;
            public get Offset(): System.TimeSpan;
            public get Second(): number;
            public get Ticks(): bigint;
            public get UtcTicks(): bigint;
            public get TimeOfDay(): System.TimeSpan;
            public get Year(): number;
            public ToOffset ($offset: System.TimeSpan) : System.DateTimeOffset
            public Add ($timeSpan: System.TimeSpan) : System.DateTimeOffset
            public AddDays ($days: number) : System.DateTimeOffset
            public AddHours ($hours: number) : System.DateTimeOffset
            public AddMilliseconds ($milliseconds: number) : System.DateTimeOffset
            public AddMinutes ($minutes: number) : System.DateTimeOffset
            public AddMonths ($months: number) : System.DateTimeOffset
            public AddSeconds ($seconds: number) : System.DateTimeOffset
            public AddTicks ($ticks: bigint) : System.DateTimeOffset
            public AddYears ($years: number) : System.DateTimeOffset
            public static Compare ($first: System.DateTimeOffset, $second: System.DateTimeOffset) : number
            public CompareTo ($other: System.DateTimeOffset) : number
            public Equals ($obj: any) : boolean
            public Equals ($other: System.DateTimeOffset) : boolean
            public EqualsExact ($other: System.DateTimeOffset) : boolean
            public static Equals ($first: System.DateTimeOffset, $second: System.DateTimeOffset) : boolean
            public static FromFileTime ($fileTime: bigint) : System.DateTimeOffset
            public static FromUnixTimeSeconds ($seconds: bigint) : System.DateTimeOffset
            public static FromUnixTimeMilliseconds ($milliseconds: bigint) : System.DateTimeOffset
            public static Parse ($input: string) : System.DateTimeOffset
            public static Parse ($input: string, $formatProvider: System.IFormatProvider) : System.DateTimeOffset
            public static Parse ($input: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider) : System.DateTimeOffset
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public static ParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public Subtract ($value: System.DateTimeOffset) : System.TimeSpan
            public Subtract ($value: System.TimeSpan) : System.DateTimeOffset
            public ToFileTime () : bigint
            public ToUnixTimeSeconds () : bigint
            public ToUnixTimeMilliseconds () : bigint
            public ToLocalTime () : System.DateTimeOffset
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($formatProvider: System.IFormatProvider) : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToUniversalTime () : System.DateTimeOffset
            public static TryParse ($input: string, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParse ($input: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static op_Implicit ($dateTime: System.DateTime) : System.DateTimeOffset
            public static op_Addition ($dateTimeOffset: System.DateTimeOffset, $timeSpan: System.TimeSpan) : System.DateTimeOffset
            public static op_Subtraction ($dateTimeOffset: System.DateTimeOffset, $timeSpan: System.TimeSpan) : System.DateTimeOffset
            public static op_Subtraction ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : System.TimeSpan
            public static op_Equality ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_Inequality ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_LessThan ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_LessThanOrEqual ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_GreaterThan ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_GreaterThanOrEqual ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public constructor ($ticks: bigint, $offset: System.TimeSpan)
            public constructor ($dateTime: System.DateTime)
            public constructor ($dateTime: System.DateTime, $offset: System.TimeSpan)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $offset: System.TimeSpan)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $offset: System.TimeSpan)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar, $offset: System.TimeSpan)
            public CompareTo ($obj: any) : number
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class DateTime extends System.ValueType implements System.IEquatable$1<System.DateTime>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.DateTime>, System.IConvertible, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public static MinValue : System.DateTime
            public static MaxValue : System.DateTime
            public static UnixEpoch : System.DateTime
            public get Date(): System.DateTime;
            public get Day(): number;
            public get DayOfWeek(): System.DayOfWeek;
            public get DayOfYear(): number;
            public get Hour(): number;
            public get Kind(): System.DateTimeKind;
            public get Millisecond(): number;
            public get Minute(): number;
            public get Month(): number;
            public static get Now(): System.DateTime;
            public get Second(): number;
            public get Ticks(): bigint;
            public get TimeOfDay(): System.TimeSpan;
            public static get Today(): System.DateTime;
            public get Year(): number;
            public static get UtcNow(): System.DateTime;
            public Add ($value: System.TimeSpan) : System.DateTime
            public AddDays ($value: number) : System.DateTime
            public AddHours ($value: number) : System.DateTime
            public AddMilliseconds ($value: number) : System.DateTime
            public AddMinutes ($value: number) : System.DateTime
            public AddMonths ($months: number) : System.DateTime
            public AddSeconds ($value: number) : System.DateTime
            public AddTicks ($value: bigint) : System.DateTime
            public AddYears ($value: number) : System.DateTime
            public static Compare ($t1: System.DateTime, $t2: System.DateTime) : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.DateTime) : number
            public static DaysInMonth ($year: number, $month: number) : number
            public Equals ($value: any) : boolean
            public Equals ($value: System.DateTime) : boolean
            public static Equals ($t1: System.DateTime, $t2: System.DateTime) : boolean
            public static FromBinary ($dateData: bigint) : System.DateTime
            public static FromFileTime ($fileTime: bigint) : System.DateTime
            public static FromFileTimeUtc ($fileTime: bigint) : System.DateTime
            public static FromOADate ($d: number) : System.DateTime
            public IsDaylightSavingTime () : boolean
            public static SpecifyKind ($value: System.DateTime, $kind: System.DateTimeKind) : System.DateTime
            public ToBinary () : bigint
            public static IsLeapYear ($year: number) : boolean
            public static Parse ($s: string) : System.DateTime
            public static Parse ($s: string, $provider: System.IFormatProvider) : System.DateTime
            public static Parse ($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : System.DateTime
            public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider) : System.DateTime
            public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles) : System.DateTime
            public static ParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles) : System.DateTime
            public Subtract ($value: System.DateTime) : System.TimeSpan
            public Subtract ($value: System.TimeSpan) : System.DateTime
            public ToOADate () : number
            public ToFileTime () : bigint
            public ToFileTimeUtc () : bigint
            public ToLocalTime () : System.DateTime
            public ToLongDateString () : string
            public ToLongTimeString () : string
            public ToShortDateString () : string
            public ToShortTimeString () : string
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public ToUniversalTime () : System.DateTime
            public static TryParse ($s: string, $result: $Ref<System.DateTime>) : boolean
            public static TryParse ($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTime>) : boolean
            public static TryParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTime>) : boolean
            public static TryParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTime>) : boolean
            public static op_Addition ($d: System.DateTime, $t: System.TimeSpan) : System.DateTime
            public static op_Subtraction ($d: System.DateTime, $t: System.TimeSpan) : System.DateTime
            public static op_Subtraction ($d1: System.DateTime, $d2: System.DateTime) : System.TimeSpan
            public static op_Equality ($d1: System.DateTime, $d2: System.DateTime) : boolean
            public static op_Inequality ($d1: System.DateTime, $d2: System.DateTime) : boolean
            public static op_LessThan ($t1: System.DateTime, $t2: System.DateTime) : boolean
            public static op_LessThanOrEqual ($t1: System.DateTime, $t2: System.DateTime) : boolean
            public static op_GreaterThan ($t1: System.DateTime, $t2: System.DateTime) : boolean
            public static op_GreaterThanOrEqual ($t1: System.DateTime, $t2: System.DateTime) : boolean
            public GetDateTimeFormats () : System.Array$1<string>
            public GetDateTimeFormats ($provider: System.IFormatProvider) : System.Array$1<string>
            public GetDateTimeFormats ($format: number) : System.Array$1<string>
            public GetDateTimeFormats ($format: number, $provider: System.IFormatProvider) : System.Array$1<string>
            public GetTypeCode () : System.TypeCode
            public constructor ($ticks: bigint)
            public constructor ($ticks: bigint, $kind: System.DateTimeKind)
            public constructor ($year: number, $month: number, $day: number)
            public constructor ($year: number, $month: number, $day: number, $calendar: System.Globalization.Calendar)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $kind: System.DateTimeKind)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $calendar: System.Globalization.Calendar)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $kind: System.DateTimeKind)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar, $kind: System.DateTimeKind)
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        enum DayOfWeek
        { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6 }
        class Exception extends System.Object implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get Data(): System.Collections.IDictionary;
            public get InnerException(): System.Exception;
            public get TargetSite(): System.Reflection.MethodBase;
            public get StackTrace(): string;
            public get HelpLink(): string;
            public set HelpLink(value: string);
            public get Source(): string;
            public set Source(value: string);
            public get HResult(): number;
            public GetBaseException () : System.Exception
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetType () : System.Type
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class SystemException extends System.Exception implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class AccessViolationException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        interface Action
        { 
        () : void; 
        Invoke?: () => void;
        }
        var Action: { new (func: () => void): Action; }
        interface IAsyncResult
        {
            IsCompleted : boolean
            AsyncWaitHandle : System.Threading.WaitHandle
            AsyncState : any
            CompletedSynchronously : boolean
        }
        interface AsyncCallback
        { 
        (ar: System.IAsyncResult) : void; 
        Invoke?: (ar: System.IAsyncResult) => void;
        }
        var AsyncCallback: { new (func: (ar: System.IAsyncResult) => void): AsyncCallback; }
        class IntPtr extends System.ValueType implements System.IEquatable$1<System.IntPtr>, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public static Zero : System.IntPtr
            public static get Size(): number;
            public ToInt32 () : number
            public ToInt64 () : bigint
            public ToString () : string
            public ToString ($format: string) : string
            public static op_Equality ($value1: System.IntPtr, $value2: System.IntPtr) : boolean
            public static op_Inequality ($value1: System.IntPtr, $value2: System.IntPtr) : boolean
            public static op_Explicit ($value: number) : System.IntPtr
            public static op_Explicit ($value: bigint) : System.IntPtr
            public static op_Explicit ($value: System.IntPtr) : number
            public static op_Explicit ($value: System.IntPtr) : bigint
            public static Add ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public static Subtract ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public static op_Addition ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public static op_Subtraction ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public constructor ($value: number)
            public constructor ($value: bigint)
            public constructor ()
        }
        interface Action$1<T>
        { 
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
        }
        interface Action$2<T1, T2>
        { 
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
        }
        interface Action$3<T1, T2, T3>
        { 
        (arg1: T1, arg2: T2, arg3: T3) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => void;
        }
        interface Action$4<T1, T2, T3, T4>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void;
        }
        interface Action$5<T1, T2, T3, T4, T5>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void;
        }
        interface Action$6<T1, T2, T3, T4, T5, T6>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void;
        }
        interface Action$7<T1, T2, T3, T4, T5, T6, T7>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void;
        }
        interface Action$8<T1, T2, T3, T4, T5, T6, T7, T8>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void;
        }
        interface Func$1<TResult>
        { 
        () : TResult; 
        Invoke?: () => TResult;
        }
        interface Func$2<T, TResult>
        { 
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
        }
        interface Func$3<T1, T2, TResult>
        { 
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
        }
        interface Func$4<T1, T2, T3, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
        }
        interface Func$5<T1, T2, T3, T4, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult;
        }
        interface Func$6<T1, T2, T3, T4, T5, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult;
        }
        interface Func$7<T1, T2, T3, T4, T5, T6, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult;
        }
        interface Func$8<T1, T2, T3, T4, T5, T6, T7, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => TResult;
        }
        interface Func$9<T1, T2, T3, T4, T5, T6, T7, T8, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => TResult;
        }
        interface Comparison$1<T>
        { 
        (x: T, y: T) : number; 
        Invoke?: (x: T, y: T) => number;
        }
        interface Converter$2<TInput, TOutput>
        { 
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
        }
        interface Predicate$1<T>
        { 
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
        }
        class AggregateException extends System.Exception implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get InnerExceptions(): System.Collections.ObjectModel.ReadOnlyCollection$1<System.Exception>;
            public get Message(): string;
            public Handle ($predicate: System.Func$2<System.Exception, boolean>) : void
            public Flatten () : System.AggregateException
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($innerExceptions: System.Collections.Generic.IEnumerable$1<System.Exception>)
            public constructor (...innerExceptions: System.Exception[])
            public constructor ($message: string, $innerExceptions: System.Collections.Generic.IEnumerable$1<System.Exception>)
            public constructor ($message: string, ...innerExceptions: System.Exception[])
        }
        class ApplicationException extends System.Exception implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ArgumentException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get ParamName(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class ArgumentNullException extends System.ArgumentException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($paramName: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($paramName: string, $message: string)
            public constructor ($message: string)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class ArgumentOutOfRangeException extends System.ArgumentException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get ActualValue(): any;
            public constructor ()
            public constructor ($paramName: string)
            public constructor ($paramName: string, $message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($paramName: string, $actualValue: any, $message: string)
            public constructor ($message: string)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class ArithmeticException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ArraySegment$1<T> extends System.ValueType implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>
        {
            protected [__keep_incompatibility]: never;
            public static get Empty(): any;
            public get Array(): System.Array$1<T>;
            public get Offset(): number;
            public get Count(): number;
            public get IsReadOnly(): boolean;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public GetEnumerator () : System.ArraySegment$1.Enumerator<T>
            public CopyTo ($destination: System.Array$1<T>) : void
            public CopyTo ($destination: System.Array$1<T>, $destinationIndex: number) : void
            public CopyTo ($destination: System.ArraySegment$1<T>) : void
            public Equals ($obj: any) : boolean
            public Equals ($obj: System.ArraySegment$1<T>) : boolean
            public Slice ($index: number) : System.ArraySegment$1<T>
            public Slice ($index: number, $count: number) : System.ArraySegment$1<T>
            public ToArray () : System.Array$1<T>
            public static op_Equality ($a: any, $b: any) : any
            public static op_Inequality ($a: any, $b: any) : any
            public static op_Implicit ($array: any) : any
            public constructor ($array: System.Array$1<T>)
            public constructor ($array: System.Array$1<T>, $offset: number, $count: number)
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            public GetEnumerator () : System.Collections.IEnumerator
            public IndexOf ($item: T) : number
            public Insert ($index: number, $item: T) : void
            public RemoveAt ($index: number) : void
            public Add ($item: T) : void
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public Remove ($item: T) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public constructor ()
            public [Symbol.iterator]() : IterableIterator<T>
        }
        class ArrayTypeMismatchException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class EventArgs extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Empty : System.EventArgs
            public constructor ()
        }
        class AssemblyLoadEventArgs extends System.EventArgs
        {
            protected [__keep_incompatibility]: never;
            public get LoadedAssembly(): System.Reflection.Assembly;
            public constructor ($loadedAssembly: System.Reflection.Assembly)
            public constructor ()
        }
        interface AssemblyLoadEventHandler
        { 
        (sender: any, args: System.AssemblyLoadEventArgs) : void; 
        Invoke?: (sender: any, args: System.AssemblyLoadEventArgs) => void;
        }
        var AssemblyLoadEventHandler: { new (func: (sender: any, args: System.AssemblyLoadEventArgs) => void): AssemblyLoadEventHandler; }
        enum AttributeTargets
        { Assembly = 1, Module = 2, Class = 4, Struct = 8, Enum = 16, Constructor = 32, Method = 64, Property = 128, Field = 256, Event = 512, Interface = 1024, Parameter = 2048, Delegate = 4096, ReturnValue = 8192, GenericParameter = 16384, All = 32767 }
        class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public get TypeId(): any;
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo, $type: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo, $type: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.MemberInfo, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.MemberInfo, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.MemberInfo, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.MemberInfo, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo, $attributeType: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo, $attributeType: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.ParameterInfo, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.ParameterInfo, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.ParameterInfo, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.ParameterInfo, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public static GetCustomAttributes ($element: System.Reflection.Module, $attributeType: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Module) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Module, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Module, $attributeType: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.Module, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.Module, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.Module, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.Module, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public static GetCustomAttributes ($element: System.Reflection.Assembly, $attributeType: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Assembly, $attributeType: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Assembly) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Assembly, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.Assembly, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.Assembly, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.Assembly, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.Assembly, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public Match ($obj: any) : boolean
            public IsDefaultAttribute () : boolean
        }
        class AttributeUsageAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public get ValidOn(): System.AttributeTargets;
            public get AllowMultiple(): boolean;
            public set AllowMultiple(value: boolean);
            public get Inherited(): boolean;
            public set Inherited(value: boolean);
            public constructor ($validOn: System.AttributeTargets)
            public constructor ()
        }
        class BadImageFormatException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get FileName(): string;
            public get FusionLog(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $fileName: string)
            public constructor ($message: string, $fileName: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class BitConverter extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static IsLittleEndian : boolean
            public static GetBytes ($value: boolean) : System.Array$1<number>
            public static GetBytes ($value: number) : System.Array$1<number>
            public static GetBytes ($value: bigint) : System.Array$1<number>
            public static ToChar ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToInt16 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToInt32 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToInt64 ($value: System.Array$1<number>, $startIndex: number) : bigint
            public static ToUInt16 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToUInt32 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToUInt64 ($value: System.Array$1<number>, $startIndex: number) : bigint
            public static ToSingle ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToDouble ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToString ($value: System.Array$1<number>, $startIndex: number, $length: number) : string
            public static ToString ($value: System.Array$1<number>) : string
            public static ToString ($value: System.Array$1<number>, $startIndex: number) : string
            public static ToBoolean ($value: System.Array$1<number>, $startIndex: number) : boolean
            public static DoubleToInt64Bits ($value: number) : bigint
            public static Int64BitsToDouble ($value: bigint) : number
            public static SingleToInt32Bits ($value: number) : number
            public static Int32BitsToSingle ($value: number) : number
            public ToString () : string
        }
        class Byte extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Int16 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Int64 extends System.ValueType implements System.IEquatable$1<bigint>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : bigint
            public static MinValue : bigint
            public CompareTo ($value: any) : number
            public CompareTo ($value: bigint) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: bigint) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : bigint
            public static Parse ($s: string, $provider: System.IFormatProvider) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : bigint
            public static TryParse ($s: string, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<bigint>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UInt16 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UInt32 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UInt64 extends System.ValueType implements System.IEquatable$1<bigint>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : bigint
            public static MinValue : bigint
            public CompareTo ($value: any) : number
            public CompareTo ($value: bigint) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: bigint) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : bigint
            public static Parse ($s: string, $provider: System.IFormatProvider) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : bigint
            public static TryParse ($s: string, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<bigint>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Single extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MinValue : number
            public static Epsilon : number
            public static MaxValue : number
            public static PositiveInfinity : number
            public static NegativeInfinity : number
            public static NaN : number
            public static IsFinite ($f: number) : boolean
            public static IsInfinity ($f: number) : boolean
            public static IsNaN ($f: number) : boolean
            public static IsNegative ($f: number) : boolean
            public static IsNegativeInfinity ($f: number) : boolean
            public static IsNormal ($f: number) : boolean
            public static IsPositiveInfinity ($f: number) : boolean
            public static IsSubnormal ($f: number) : boolean
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public static op_Equality ($left: number, $right: number) : boolean
            public static op_Inequality ($left: number, $right: number) : boolean
            public static op_LessThan ($left: number, $right: number) : boolean
            public static op_GreaterThan ($left: number, $right: number) : boolean
            public static op_LessThanOrEqual ($left: number, $right: number) : boolean
            public static op_GreaterThanOrEqual ($left: number, $right: number) : boolean
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Double extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MinValue : number
            public static MaxValue : number
            public static Epsilon : number
            public static NegativeInfinity : number
            public static PositiveInfinity : number
            public static NaN : number
            public static IsFinite ($d: number) : boolean
            public static IsInfinity ($d: number) : boolean
            public static IsNaN ($d: number) : boolean
            public static IsNegative ($d: number) : boolean
            public static IsNegativeInfinity ($d: number) : boolean
            public static IsNormal ($d: number) : boolean
            public static IsPositiveInfinity ($d: number) : boolean
            public static IsSubnormal ($d: number) : boolean
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public static op_Equality ($left: number, $right: number) : boolean
            public static op_Inequality ($left: number, $right: number) : boolean
            public static op_LessThan ($left: number, $right: number) : boolean
            public static op_GreaterThan ($left: number, $right: number) : boolean
            public static op_LessThanOrEqual ($left: number, $right: number) : boolean
            public static op_GreaterThanOrEqual ($left: number, $right: number) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class CLSCompliantAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public get IsCompliant(): boolean;
            public constructor ($isCompliant: boolean)
            public constructor ()
        }
        class Convert extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DBNull : any
            public static GetTypeCode ($value: any) : System.TypeCode
            public static IsDBNull ($value: any) : boolean
            public static ChangeType ($value: any, $typeCode: System.TypeCode) : any
            public static ChangeType ($value: any, $typeCode: System.TypeCode, $provider: System.IFormatProvider) : any
            public static ChangeType ($value: any, $conversionType: System.Type) : any
            public static ChangeType ($value: any, $conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static ToBoolean ($value: any) : boolean
            public static ToBoolean ($value: any, $provider: System.IFormatProvider) : boolean
            public static ToBoolean ($value: boolean) : boolean
            public static ToBoolean ($value: number) : boolean
            public static ToBoolean ($value: bigint) : boolean
            public static ToBoolean ($value: string) : boolean
            public static ToBoolean ($value: string, $provider: System.IFormatProvider) : boolean
            public static ToBoolean ($value: System.Decimal) : boolean
            public static ToBoolean ($value: System.DateTime) : boolean
            public static ToChar ($value: any) : number
            public static ToChar ($value: any, $provider: System.IFormatProvider) : number
            public static ToChar ($value: boolean) : number
            public static ToChar ($value: number) : number
            public static ToChar ($value: bigint) : number
            public static ToChar ($value: string) : number
            public static ToChar ($value: string, $provider: System.IFormatProvider) : number
            public static ToChar ($value: System.Decimal) : number
            public static ToChar ($value: System.DateTime) : number
            public static ToSByte ($value: any) : number
            public static ToSByte ($value: any, $provider: System.IFormatProvider) : number
            public static ToSByte ($value: boolean) : number
            public static ToSByte ($value: number) : number
            public static ToSByte ($value: bigint) : number
            public static ToSByte ($value: System.Decimal) : number
            public static ToSByte ($value: string) : number
            public static ToSByte ($value: string, $provider: System.IFormatProvider) : number
            public static ToSByte ($value: System.DateTime) : number
            public static ToByte ($value: any) : number
            public static ToByte ($value: any, $provider: System.IFormatProvider) : number
            public static ToByte ($value: boolean) : number
            public static ToByte ($value: number) : number
            public static ToByte ($value: bigint) : number
            public static ToByte ($value: System.Decimal) : number
            public static ToByte ($value: string) : number
            public static ToByte ($value: string, $provider: System.IFormatProvider) : number
            public static ToByte ($value: System.DateTime) : number
            public static ToInt16 ($value: any) : number
            public static ToInt16 ($value: any, $provider: System.IFormatProvider) : number
            public static ToInt16 ($value: boolean) : number
            public static ToInt16 ($value: number) : number
            public static ToInt16 ($value: bigint) : number
            public static ToInt16 ($value: System.Decimal) : number
            public static ToInt16 ($value: string) : number
            public static ToInt16 ($value: string, $provider: System.IFormatProvider) : number
            public static ToInt16 ($value: System.DateTime) : number
            public static ToUInt16 ($value: any) : number
            public static ToUInt16 ($value: any, $provider: System.IFormatProvider) : number
            public static ToUInt16 ($value: boolean) : number
            public static ToUInt16 ($value: number) : number
            public static ToUInt16 ($value: bigint) : number
            public static ToUInt16 ($value: System.Decimal) : number
            public static ToUInt16 ($value: string) : number
            public static ToUInt16 ($value: string, $provider: System.IFormatProvider) : number
            public static ToUInt16 ($value: System.DateTime) : number
            public static ToInt32 ($value: any) : number
            public static ToInt32 ($value: any, $provider: System.IFormatProvider) : number
            public static ToInt32 ($value: boolean) : number
            public static ToInt32 ($value: number) : number
            public static ToInt32 ($value: bigint) : number
            public static ToInt32 ($value: System.Decimal) : number
            public static ToInt32 ($value: string) : number
            public static ToInt32 ($value: string, $provider: System.IFormatProvider) : number
            public static ToInt32 ($value: System.DateTime) : number
            public static ToUInt32 ($value: any) : number
            public static ToUInt32 ($value: any, $provider: System.IFormatProvider) : number
            public static ToUInt32 ($value: boolean) : number
            public static ToUInt32 ($value: number) : number
            public static ToUInt32 ($value: bigint) : number
            public static ToUInt32 ($value: System.Decimal) : number
            public static ToUInt32 ($value: string) : number
            public static ToUInt32 ($value: string, $provider: System.IFormatProvider) : number
            public static ToUInt32 ($value: System.DateTime) : number
            public static ToInt64 ($value: any) : bigint
            public static ToInt64 ($value: any, $provider: System.IFormatProvider) : bigint
            public static ToInt64 ($value: boolean) : bigint
            public static ToInt64 ($value: number) : bigint
            public static ToInt64 ($value: bigint) : bigint
            public static ToInt64 ($value: System.Decimal) : bigint
            public static ToInt64 ($value: string) : bigint
            public static ToInt64 ($value: string, $provider: System.IFormatProvider) : bigint
            public static ToInt64 ($value: System.DateTime) : bigint
            public static ToUInt64 ($value: any) : bigint
            public static ToUInt64 ($value: any, $provider: System.IFormatProvider) : bigint
            public static ToUInt64 ($value: boolean) : bigint
            public static ToUInt64 ($value: number) : bigint
            public static ToUInt64 ($value: bigint) : bigint
            public static ToUInt64 ($value: System.Decimal) : bigint
            public static ToUInt64 ($value: string) : bigint
            public static ToUInt64 ($value: string, $provider: System.IFormatProvider) : bigint
            public static ToUInt64 ($value: System.DateTime) : bigint
            public static ToSingle ($value: any) : number
            public static ToSingle ($value: any, $provider: System.IFormatProvider) : number
            public static ToSingle ($value: number) : number
            public static ToSingle ($value: bigint) : number
            public static ToSingle ($value: System.Decimal) : number
            public static ToSingle ($value: string) : number
            public static ToSingle ($value: string, $provider: System.IFormatProvider) : number
            public static ToSingle ($value: boolean) : number
            public static ToSingle ($value: System.DateTime) : number
            public static ToDouble ($value: any) : number
            public static ToDouble ($value: any, $provider: System.IFormatProvider) : number
            public static ToDouble ($value: number) : number
            public static ToDouble ($value: bigint) : number
            public static ToDouble ($value: System.Decimal) : number
            public static ToDouble ($value: string) : number
            public static ToDouble ($value: string, $provider: System.IFormatProvider) : number
            public static ToDouble ($value: boolean) : number
            public static ToDouble ($value: System.DateTime) : number
            public static ToDecimal ($value: any) : System.Decimal
            public static ToDecimal ($value: any, $provider: System.IFormatProvider) : System.Decimal
            public static ToDecimal ($value: number) : System.Decimal
            public static ToDecimal ($value: bigint) : System.Decimal
            public static ToDecimal ($value: string) : System.Decimal
            public static ToDecimal ($value: string, $provider: System.IFormatProvider) : System.Decimal
            public static ToDecimal ($value: System.Decimal) : System.Decimal
            public static ToDecimal ($value: boolean) : System.Decimal
            public static ToDecimal ($value: System.DateTime) : System.Decimal
            public static ToDateTime ($value: System.DateTime) : System.DateTime
            public static ToDateTime ($value: any) : System.DateTime
            public static ToDateTime ($value: any, $provider: System.IFormatProvider) : System.DateTime
            public static ToDateTime ($value: string) : System.DateTime
            public static ToDateTime ($value: string, $provider: System.IFormatProvider) : System.DateTime
            public static ToDateTime ($value: number) : System.DateTime
            public static ToDateTime ($value: bigint) : System.DateTime
            public static ToDateTime ($value: boolean) : System.DateTime
            public static ToDateTime ($value: System.Decimal) : System.DateTime
            public static ToString ($value: any) : string
            public static ToString ($value: any, $provider: System.IFormatProvider) : string
            public static ToString ($value: boolean) : string
            public static ToString ($value: boolean, $provider: System.IFormatProvider) : string
            public static ToString ($value: number) : string
            public static ToString ($value: number, $provider: System.IFormatProvider) : string
            public static ToString ($value: bigint) : string
            public static ToString ($value: bigint, $provider: System.IFormatProvider) : string
            public static ToString ($value: System.Decimal) : string
            public static ToString ($value: System.Decimal, $provider: System.IFormatProvider) : string
            public static ToString ($value: System.DateTime) : string
            public static ToString ($value: System.DateTime, $provider: System.IFormatProvider) : string
            public static ToString ($value: string) : string
            public static ToString ($value: string, $provider: System.IFormatProvider) : string
            public static ToByte ($value: string, $fromBase: number) : number
            public static ToSByte ($value: string, $fromBase: number) : number
            public static ToInt16 ($value: string, $fromBase: number) : number
            public static ToUInt16 ($value: string, $fromBase: number) : number
            public static ToInt32 ($value: string, $fromBase: number) : number
            public static ToUInt32 ($value: string, $fromBase: number) : number
            public static ToInt64 ($value: string, $fromBase: number) : bigint
            public static ToUInt64 ($value: string, $fromBase: number) : bigint
            public static ToString ($value: number, $toBase: number) : string
            public static ToString ($value: bigint, $toBase: number) : string
            public static ToBase64String ($inArray: System.Array$1<number>) : string
            public static ToBase64String ($inArray: System.Array$1<number>, $options: System.Base64FormattingOptions) : string
            public static ToBase64String ($inArray: System.Array$1<number>, $offset: number, $length: number) : string
            public static ToBase64String ($inArray: System.Array$1<number>, $offset: number, $length: number, $options: System.Base64FormattingOptions) : string
            public static ToBase64CharArray ($inArray: System.Array$1<number>, $offsetIn: number, $length: number, $outArray: System.Array$1<number>, $offsetOut: number) : number
            public static ToBase64CharArray ($inArray: System.Array$1<number>, $offsetIn: number, $length: number, $outArray: System.Array$1<number>, $offsetOut: number, $options: System.Base64FormattingOptions) : number
            public static FromBase64String ($s: string) : System.Array$1<number>
            public static FromBase64CharArray ($inArray: System.Array$1<number>, $offset: number, $length: number) : System.Array$1<number>
            public ToString () : string
        }
        class Type extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect, System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type
        {
            protected [__keep_incompatibility]: never;
            public static Delimiter : number
            public static EmptyTypes : System.Array$1<System.Type>
            public static Missing : any
            public static FilterAttribute : System.Reflection.MemberFilter
            public static FilterName : System.Reflection.MemberFilter
            public static FilterNameIgnoreCase : System.Reflection.MemberFilter
            public get IsSerializable(): boolean;
            public get ContainsGenericParameters(): boolean;
            public get IsVisible(): boolean;
            public get MemberType(): System.Reflection.MemberTypes;
            public get Namespace(): string;
            public get AssemblyQualifiedName(): string;
            public get FullName(): string;
            public get Assembly(): System.Reflection.Assembly;
            public get Module(): System.Reflection.Module;
            public get IsNested(): boolean;
            public get DeclaringType(): System.Type;
            public get DeclaringMethod(): System.Reflection.MethodBase;
            public get ReflectedType(): System.Type;
            public get UnderlyingSystemType(): System.Type;
            public get IsTypeDefinition(): boolean;
            public get IsArray(): boolean;
            public get IsByRef(): boolean;
            public get IsPointer(): boolean;
            public get IsConstructedGenericType(): boolean;
            public get IsGenericParameter(): boolean;
            public get IsGenericTypeParameter(): boolean;
            public get IsGenericMethodParameter(): boolean;
            public get IsGenericType(): boolean;
            public get IsGenericTypeDefinition(): boolean;
            public get IsSZArray(): boolean;
            public get IsVariableBoundArray(): boolean;
            public get IsByRefLike(): boolean;
            public get HasElementType(): boolean;
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            public get GenericParameterPosition(): number;
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            public get Attributes(): System.Reflection.TypeAttributes;
            public get IsAbstract(): boolean;
            public get IsImport(): boolean;
            public get IsSealed(): boolean;
            public get IsSpecialName(): boolean;
            public get IsClass(): boolean;
            public get IsNestedAssembly(): boolean;
            public get IsNestedFamANDAssem(): boolean;
            public get IsNestedFamily(): boolean;
            public get IsNestedFamORAssem(): boolean;
            public get IsNestedPrivate(): boolean;
            public get IsNestedPublic(): boolean;
            public get IsNotPublic(): boolean;
            public get IsPublic(): boolean;
            public get IsAutoLayout(): boolean;
            public get IsExplicitLayout(): boolean;
            public get IsLayoutSequential(): boolean;
            public get IsAnsiClass(): boolean;
            public get IsAutoClass(): boolean;
            public get IsUnicodeClass(): boolean;
            public get IsCOMObject(): boolean;
            public get IsContextful(): boolean;
            public get IsCollectible(): boolean;
            public get IsEnum(): boolean;
            public get IsMarshalByRef(): boolean;
            public get IsPrimitive(): boolean;
            public get IsValueType(): boolean;
            public get IsSignatureType(): boolean;
            public get IsSecurityCritical(): boolean;
            public get IsSecuritySafeCritical(): boolean;
            public get IsSecurityTransparent(): boolean;
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            public get TypeHandle(): System.RuntimeTypeHandle;
            public get GUID(): System.Guid;
            public get BaseType(): System.Type;
            public static get DefaultBinder(): System.Reflection.Binder;
            public get IsInterface(): boolean;
            public IsEnumDefined ($value: any) : boolean
            public GetEnumName ($value: any) : string
            public GetEnumNames () : System.Array$1<string>
            public FindInterfaces ($filter: System.Reflection.TypeFilter, $filterCriteria: any) : System.Array$1<System.Type>
            public FindMembers ($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any) : System.Array$1<System.Reflection.MemberInfo>
            public IsSubclassOf ($c: System.Type) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
            public GetType () : System.Type
            public GetElementType () : System.Type
            public GetArrayRank () : number
            public GetGenericTypeDefinition () : System.Type
            public GetGenericArguments () : System.Array$1<System.Type>
            public GetGenericParameterConstraints () : System.Array$1<System.Type>
            public GetConstructor ($types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructors () : System.Array$1<System.Reflection.ConstructorInfo>
            public GetConstructors ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.ConstructorInfo>
            public GetEvent ($name: string) : System.Reflection.EventInfo
            public GetEvent ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.EventInfo
            public GetEvents () : System.Array$1<System.Reflection.EventInfo>
            public GetEvents ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.EventInfo>
            public GetField ($name: string) : System.Reflection.FieldInfo
            public GetField ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.FieldInfo
            public GetFields () : System.Array$1<System.Reflection.FieldInfo>
            public GetFields ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.FieldInfo>
            public GetMember ($name: string) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers () : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMethod ($name: string) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethods () : System.Array$1<System.Reflection.MethodInfo>
            public GetMethods ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MethodInfo>
            public GetNestedType ($name: string) : System.Type
            public GetNestedType ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Type
            public GetNestedTypes () : System.Array$1<System.Type>
            public GetNestedTypes ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Type>
            public GetProperty ($name: string) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperties () : System.Array$1<System.Reflection.PropertyInfo>
            public GetProperties ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.PropertyInfo>
            public GetDefaultMembers () : System.Array$1<System.Reflection.MemberInfo>
            public static GetTypeHandle ($o: any) : System.RuntimeTypeHandle
            public static GetTypeArray ($args: System.Array$1<any>) : System.Array$1<System.Type>
            public static GetTypeCode ($type: System.Type) : System.TypeCode
            public static GetTypeFromCLSID ($clsid: System.Guid) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string) : System.Type
            public static GetTypeFromProgID ($progID: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string) : System.Type
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>) : any
            public GetInterface ($name: string) : System.Type
            public GetInterface ($name: string, $ignoreCase: boolean) : System.Type
            public GetInterfaces () : System.Array$1<System.Type>
            public GetInterfaceMap ($interfaceType: System.Type) : System.Reflection.InterfaceMapping
            public IsInstanceOfType ($o: any) : boolean
            public IsEquivalentTo ($other: System.Type) : boolean
            public GetEnumUnderlyingType () : System.Type
            public GetEnumValues () : System.Array
            public MakeArrayType () : System.Type
            public MakeArrayType ($rank: number) : System.Type
            public MakeByRefType () : System.Type
            public MakeGenericType (...typeArguments: System.Type[]) : System.Type
            public MakePointerType () : System.Type
            public static MakeGenericSignatureType ($genericTypeDefinition: System.Type, ...typeArguments: System.Type[]) : System.Type
            public static MakeGenericMethodParameter ($position: number) : System.Type
            public Equals ($o: any) : boolean
            public Equals ($o: System.Type) : boolean
            public static GetTypeFromHandle ($handle: System.RuntimeTypeHandle) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static op_Equality ($left: System.Type, $right: System.Type) : boolean
            public static op_Inequality ($left: System.Type, $right: System.Type) : boolean
            public static ReflectionOnlyGetType ($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string, $throwOnError: boolean) : System.Type
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class SByte extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($obj: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Decimal extends System.ValueType implements System.IEquatable$1<System.Decimal>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.Runtime.Serialization.IDeserializationCallback, System.IComparable$1<System.Decimal>, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
            public static Zero : System.Decimal
            public static One : System.Decimal
            public static MinusOne : System.Decimal
            public static MaxValue : System.Decimal
            public static MinValue : System.Decimal
            public static FromOACurrency ($cy: bigint) : System.Decimal
            public static ToOACurrency ($value: System.Decimal) : bigint
            public static Add ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static Ceiling ($d: System.Decimal) : System.Decimal
            public static Compare ($d1: System.Decimal, $d2: System.Decimal) : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.Decimal) : number
            public static Divide ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public Equals ($value: any) : boolean
            public Equals ($value: System.Decimal) : boolean
            public static Equals ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static Floor ($d: System.Decimal) : System.Decimal
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : System.Decimal
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : System.Decimal
            public static Parse ($s: string, $provider: System.IFormatProvider) : System.Decimal
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : System.Decimal
            public static TryParse ($s: string, $result: $Ref<System.Decimal>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.Decimal>) : boolean
            public static GetBits ($d: System.Decimal) : System.Array$1<number>
            public static Remainder ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static Multiply ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static Negate ($d: System.Decimal) : System.Decimal
            public static Round ($d: System.Decimal) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number) : System.Decimal
            public static Round ($d: System.Decimal, $mode: System.MidpointRounding) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number, $mode: System.MidpointRounding) : System.Decimal
            public static Subtract ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static ToByte ($value: System.Decimal) : number
            public static ToSByte ($value: System.Decimal) : number
            public static ToInt16 ($value: System.Decimal) : number
            public static ToDouble ($d: System.Decimal) : number
            public static ToInt32 ($d: System.Decimal) : number
            public static ToInt64 ($d: System.Decimal) : bigint
            public static ToUInt16 ($value: System.Decimal) : number
            public static ToUInt32 ($d: System.Decimal) : number
            public static ToUInt64 ($d: System.Decimal) : bigint
            public static ToSingle ($d: System.Decimal) : number
            public static Truncate ($d: System.Decimal) : System.Decimal
            public static op_Implicit ($value: number) : System.Decimal
            public static op_Implicit ($value: bigint) : System.Decimal
            public static op_Explicit ($value: number) : System.Decimal
            public static op_Explicit ($value: System.Decimal) : number
            public static op_Explicit ($value: System.Decimal) : bigint
            public static op_UnaryPlus ($d: System.Decimal) : System.Decimal
            public static op_UnaryNegation ($d: System.Decimal) : System.Decimal
            public static op_Increment ($d: System.Decimal) : System.Decimal
            public static op_Decrement ($d: System.Decimal) : System.Decimal
            public static op_Addition ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Subtraction ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Multiply ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Division ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Modulus ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Equality ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_Inequality ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_LessThan ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_LessThanOrEqual ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_GreaterThan ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_GreaterThanOrEqual ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public GetTypeCode () : System.TypeCode
            public constructor ($value: number)
            public constructor ($value: bigint)
            public constructor ($bits: System.Array$1<number>)
            public constructor ($lo: number, $mid: number, $hi: number, $isNegative: boolean, $scale: number)
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        enum Base64FormattingOptions
        { None = 0, InsertLineBreaks = 1 }
        class DBNull extends System.Object implements System.IConvertible, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public static Value : System.DBNull
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public GetTypeCode () : System.TypeCode
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : System.DateTime
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
        }
        class DataMisalignedException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        enum DateTimeKind
        { Unspecified = 0, Utc = 1, Local = 2 }
        class DivideByZeroException extends System.ArithmeticException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class TypeLoadException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get TypeName(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class DllNotFoundException extends System.TypeLoadException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class DuplicateWaitObjectException extends System.ArgumentException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($parameterName: string)
            public constructor ($parameterName: string, $message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class EntryPointNotFoundException extends System.TypeLoadException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        interface EventHandler
        { 
        (sender: any, e: System.EventArgs) : void; 
        Invoke?: (sender: any, e: System.EventArgs) => void;
        }
        var EventHandler: { new (func: (sender: any, e: System.EventArgs) => void): EventHandler; }
        interface EventHandler$1<TEventArgs>
        { 
        (sender: any, e: TEventArgs) : void; 
        Invoke?: (sender: any, e: TEventArgs) => void;
        }
        class ExecutionEngineException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class MemberAccessException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class FieldAccessException extends System.MemberAccessException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class FlagsAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class FormatException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class FormattableString extends System.Object implements System.IFormattable
        {
            protected [__keep_incompatibility]: never;
            public get Format(): string;
            public get ArgumentCount(): number;
            public GetArguments () : System.Array$1<any>
            public GetArgument ($index: number) : any
            public ToString ($formatProvider: System.IFormatProvider) : string
            public static Invariant ($formattable: System.FormattableString) : string
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        class Guid extends System.ValueType implements System.IEquatable$1<System.Guid>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.Guid>
        {
            protected [__keep_incompatibility]: never;
            public static Empty : System.Guid
            public static NewGuid () : System.Guid
            public static Parse ($input: string) : System.Guid
            public static TryParse ($input: string, $result: $Ref<System.Guid>) : boolean
            public static ParseExact ($input: string, $format: string) : System.Guid
            public static TryParseExact ($input: string, $format: string, $result: $Ref<System.Guid>) : boolean
            public ToByteArray () : System.Array$1<number>
            public ToString () : string
            public Equals ($o: any) : boolean
            public Equals ($g: System.Guid) : boolean
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.Guid) : number
            public static op_Equality ($a: System.Guid, $b: System.Guid) : boolean
            public static op_Inequality ($a: System.Guid, $b: System.Guid) : boolean
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public constructor ($b: System.Array$1<number>)
            public constructor ($a: number, $b: number, $c: number, $d: number, $e: number, $f: number, $g: number, $h: number, $i: number, $j: number, $k: number)
            public constructor ($a: number, $b: number, $c: number, $d: System.Array$1<number>)
            public constructor ($g: string)
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class HashCode extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public ToHashCode () : number
        }
        interface IAsyncDisposable
        {
            DisposeAsync () : System.Threading.Tasks.ValueTask
        }
        class MarshalByRefObject extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public CreateObjRef ($requestedType: System.Type) : System.Runtime.Remoting.ObjRef
            public GetLifetimeService () : any
            public InitializeLifetimeService () : any
        }
        interface ICustomFormatter
        {
            Format ($format: string, $arg: any, $formatProvider: System.IFormatProvider) : string
        }
        interface IObservable$1<T>
        {
            Subscribe ($observer: System.IObserver$1<T>) : System.IDisposable
        }
        interface IObserver$1<T>
        {
            OnNext ($value: T) : void
            OnError ($error: System.Exception) : void
            OnCompleted () : void
        }
        interface IProgress$1<T>
        {
            Report ($value: T) : void
        }
        class Index extends System.ValueType implements System.IEquatable$1<System.Index>
        {
            protected [__keep_incompatibility]: never;
            public static get Start(): System.Index;
            public static get End(): System.Index;
            public get Value(): number;
            public get IsFromEnd(): boolean;
            public static FromStart ($value: number) : System.Index
            public static FromEnd ($value: number) : System.Index
            public GetOffset ($length: number) : number
            public Equals ($value: any) : boolean
            public Equals ($other: System.Index) : boolean
            public static op_Implicit ($value: number) : System.Index
            public constructor ($value: number, $fromEnd?: boolean)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class IndexOutOfRangeException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InsufficientExecutionStackException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InvalidCastException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string, $errorCode: number)
        }
        class InvalidOperationException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InvalidProgramException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InvalidTimeZoneException extends System.Exception implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Lazy$1<T> extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get IsValueCreated(): boolean;
            public get Value(): T;
            public constructor ()
            public constructor ($value: T)
            public constructor ($valueFactory: System.Func$1<T>)
            public constructor ($isThreadSafe: boolean)
            public constructor ($mode: System.Threading.LazyThreadSafetyMode)
            public constructor ($valueFactory: System.Func$1<T>, $isThreadSafe: boolean)
            public constructor ($valueFactory: System.Func$1<T>, $mode: System.Threading.LazyThreadSafetyMode)
        }
        class Math extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static E : number
            public static PI : number
            public static Abs ($value: number) : number
            public static Abs ($value: bigint) : bigint
            public static Abs ($value: System.Decimal) : System.Decimal
            public static BigMul ($a: number, $b: number) : bigint
            public static DivRem ($a: number, $b: number, $result: $Ref<number>) : number
            public static DivRem ($a: bigint, $b: bigint, $result: $Ref<bigint>) : bigint
            public static Ceiling ($d: System.Decimal) : System.Decimal
            public static Clamp ($value: number, $min: number, $max: number) : number
            public static Clamp ($value: System.Decimal, $min: System.Decimal, $max: System.Decimal) : System.Decimal
            public static Clamp ($value: bigint, $min: bigint, $max: bigint) : bigint
            public static Floor ($d: System.Decimal) : System.Decimal
            public static IEEERemainder ($x: number, $y: number) : number
            public static Log ($a: number, $newBase: number) : number
            public static Max ($val1: number, $val2: number) : number
            public static Max ($val1: System.Decimal, $val2: System.Decimal) : System.Decimal
            public static Max ($val1: bigint, $val2: bigint) : bigint
            public static Min ($val1: number, $val2: number) : number
            public static Min ($val1: System.Decimal, $val2: System.Decimal) : System.Decimal
            public static Min ($val1: bigint, $val2: bigint) : bigint
            public static Round ($d: System.Decimal) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number) : System.Decimal
            public static Round ($d: System.Decimal, $mode: System.MidpointRounding) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number, $mode: System.MidpointRounding) : System.Decimal
            public static Round ($a: number) : number
            public static Round ($value: number, $digits: number) : number
            public static Round ($value: number, $mode: System.MidpointRounding) : number
            public static Round ($value: number, $digits: number, $mode: System.MidpointRounding) : number
            public static Sign ($value: System.Decimal) : number
            public static Sign ($value: number) : number
            public static Sign ($value: bigint) : number
            public static Truncate ($d: System.Decimal) : System.Decimal
            public static Truncate ($d: number) : number
            public static Acos ($d: number) : number
            public static Acosh ($d: number) : number
            public static Asin ($d: number) : number
            public static Asinh ($d: number) : number
            public static Atan ($d: number) : number
            public static Atan2 ($y: number, $x: number) : number
            public static Atanh ($d: number) : number
            public static Cbrt ($d: number) : number
            public static Ceiling ($a: number) : number
            public static Cos ($d: number) : number
            public static Cosh ($value: number) : number
            public static Exp ($d: number) : number
            public static Floor ($d: number) : number
            public static Log ($d: number) : number
            public static Log10 ($d: number) : number
            public static Pow ($x: number, $y: number) : number
            public static Sin ($a: number) : number
            public static Sinh ($value: number) : number
            public static Sqrt ($d: number) : number
            public static Tan ($a: number) : number
            public static Tanh ($value: number) : number
        }
        enum MidpointRounding
        { ToEven = 0, AwayFromZero = 1 }
        class MathF extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static E : number
            public static PI : number
            public static Abs ($x: number) : number
            public static IEEERemainder ($x: number, $y: number) : number
            public static Log ($x: number, $y: number) : number
            public static Max ($x: number, $y: number) : number
            public static Min ($x: number, $y: number) : number
            public static Round ($x: number) : number
            public static Round ($x: number, $digits: number) : number
            public static Round ($x: number, $mode: System.MidpointRounding) : number
            public static Round ($x: number, $digits: number, $mode: System.MidpointRounding) : number
            public static Sign ($x: number) : number
            public static Truncate ($x: number) : number
            public static Acos ($x: number) : number
            public static Acosh ($x: number) : number
            public static Asin ($x: number) : number
            public static Asinh ($x: number) : number
            public static Atan ($x: number) : number
            public static Atan2 ($y: number, $x: number) : number
            public static Atanh ($x: number) : number
            public static Cbrt ($x: number) : number
            public static Ceiling ($x: number) : number
            public static Cos ($x: number) : number
            public static Cosh ($x: number) : number
            public static Exp ($x: number) : number
            public static Floor ($x: number) : number
            public static Log ($x: number) : number
            public static Log10 ($x: number) : number
            public static Pow ($x: number, $y: number) : number
            public static Sin ($x: number) : number
            public static Sinh ($x: number) : number
            public static Sqrt ($x: number) : number
            public static Tan ($x: number) : number
            public static Tanh ($x: number) : number
        }
        class Memory$1<T> extends System.ValueType implements System.IEquatable$1<System.Memory$1<T>>
        {
            protected [__keep_incompatibility]: never;
            public static get Empty(): any;
            public get Length(): number;
            public get IsEmpty(): boolean;
            public static op_Implicit ($array: any) : any
            public static op_Implicit ($segment: any) : any
            public static op_Implicit ($memory: any) : any
            public Slice ($start: number) : System.Memory$1<T>
            public Slice ($start: number, $length: number) : System.Memory$1<T>
            public CopyTo ($destination: System.Memory$1<T>) : void
            public TryCopyTo ($destination: System.Memory$1<T>) : boolean
            public Pin () : System.Buffers.MemoryHandle
            public ToArray () : System.Array$1<T>
            public Equals ($obj: any) : boolean
            public Equals ($other: System.Memory$1<T>) : boolean
            public constructor ($array: System.Array$1<T>)
            public constructor ($array: System.Array$1<T>, $start: number, $length: number)
            public static Equals ($objA: any, $objB: any) : any
            public constructor ()
        }
        class ReadOnlyMemory$1<T> extends System.ValueType implements System.IEquatable$1<System.ReadOnlyMemory$1<T>>
        {
            protected [__keep_incompatibility]: never;
            public static get Empty(): any;
            public get Length(): number;
            public get IsEmpty(): boolean;
            public static op_Implicit ($array: any) : any
            public static op_Implicit ($segment: any) : any
            public Slice ($start: number) : System.ReadOnlyMemory$1<T>
            public Slice ($start: number, $length: number) : System.ReadOnlyMemory$1<T>
            public CopyTo ($destination: System.Memory$1<T>) : void
            public TryCopyTo ($destination: System.Memory$1<T>) : boolean
            public Pin () : System.Buffers.MemoryHandle
            public ToArray () : System.Array$1<T>
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ReadOnlyMemory$1<T>) : boolean
            public constructor ($array: System.Array$1<T>)
            public constructor ($array: System.Array$1<T>, $start: number, $length: number)
            public static Equals ($objA: any, $objB: any) : any
            public constructor ()
        }
        class MemoryExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static AsMemory ($text: string) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $start: number) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $startIndex: System.Index) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $start: number, $length: number) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $range: System.Range) : System.ReadOnlyMemory$1<number>
        }
        class Range extends System.ValueType implements System.IEquatable$1<System.Range>
        {
            protected [__keep_incompatibility]: never;
            public get Start(): System.Index;
            public get End(): System.Index;
            public static get All(): System.Range;
            public Equals ($value: any) : boolean
            public Equals ($other: System.Range) : boolean
            public static StartAt ($start: System.Index) : System.Range
            public static EndAt ($end: System.Index) : System.Range
            public GetOffsetAndLength ($length: number) : System.ValueTuple$2<number, number>
            public constructor ($start: System.Index, $end: System.Index)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class MethodAccessException extends System.MemberAccessException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class MissingMemberException extends System.MemberAccessException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($className: string, $memberName: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class MissingMethodException extends System.MissingMemberException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($className: string, $methodName: string)
            public constructor ($className: string, $memberName: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class MulticastNotSupportedException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class NonSerializedAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class NotFiniteNumberException extends System.ArithmeticException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get OffendingNumber(): number;
            public constructor ()
            public constructor ($offendingNumber: number)
            public constructor ($message: string)
            public constructor ($message: string, $offendingNumber: number)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string, $offendingNumber: number, $innerException: System.Exception)
        }
        class NotImplementedException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class NotSupportedException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class NullReferenceException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Nullable$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get HasValue(): boolean;
            public get Value(): T;
            public GetValueOrDefault () : T
            public GetValueOrDefault ($defaultValue: T) : T
            public static op_Implicit ($value: any) : any
            public static op_Explicit ($value: any) : any
            public constructor ($value: T)
            public constructor ()
        }
        class Nullable extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetUnderlyingType ($nullableType: System.Type) : System.Type
        }
        class ObjectDisposedException extends System.InvalidOperationException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get ObjectName(): string;
            public constructor ($objectName: string)
            public constructor ($objectName: string, $message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ()
            public constructor ($message: string)
        }
        class ObsoleteAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get IsError(): boolean;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $error: boolean)
        }
        class OperationCanceledException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get CancellationToken(): System.Threading.CancellationToken;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($token: System.Threading.CancellationToken)
            public constructor ($message: string, $token: System.Threading.CancellationToken)
            public constructor ($message: string, $innerException: System.Exception, $token: System.Threading.CancellationToken)
        }
        class OverflowException extends System.ArithmeticException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ParamArrayAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class PlatformNotSupportedException extends System.NotSupportedException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Progress$1<T> extends System.Object implements System.IProgress$1<T>
        {
            protected [__keep_incompatibility]: never;
            public add_ProgressChanged ($value: System.EventHandler$1<T>) : void
            public remove_ProgressChanged ($value: System.EventHandler$1<T>) : void
            public constructor ()
            public constructor ($handler: System.Action$1<T>)
            public Report ($value: T) : void
        }
        class Random extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Next () : number
            public Next ($minValue: number, $maxValue: number) : number
            public Next ($maxValue: number) : number
            public NextDouble () : number
            public NextBytes ($buffer: System.Array$1<number>) : void
            public constructor ()
            public constructor ($Seed: number)
        }
        class ValueTuple$2<T1, T2> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$2<T1, T2>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$2<T1, T2>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Item2 : T2
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$2<T1, T2>) : boolean
            public CompareTo ($other: System.ValueTuple$2<T1, T2>) : number
            public constructor ($item1: T1, $item2: T2)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        interface IValueTupleInternal extends System.Runtime.CompilerServices.ITuple
        {
        }
        class RankException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ResolveEventArgs extends System.EventArgs
        {
            protected [__keep_incompatibility]: never;
            public get Name(): string;
            public get RequestingAssembly(): System.Reflection.Assembly;
            public constructor ($name: string)
            public constructor ($name: string, $requestingAssembly: System.Reflection.Assembly)
            public constructor ()
        }
        interface ResolveEventHandler
        { 
        (sender: any, args: System.ResolveEventArgs) : System.Reflection.Assembly; 
        Invoke?: (sender: any, args: System.ResolveEventArgs) => System.Reflection.Assembly;
        }
        var ResolveEventHandler: { new (func: (sender: any, args: System.ResolveEventArgs) => System.Reflection.Assembly): ResolveEventHandler; }
        class SerializableAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class StackOverflowException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class StringComparer extends System.Object implements System.Collections.Generic.IEqualityComparer$1<string>, System.Collections.IEqualityComparer, System.Collections.Generic.IComparer$1<string>, System.Collections.IComparer
        {
            protected [__keep_incompatibility]: never;
            public static get InvariantCulture(): System.StringComparer;
            public static get InvariantCultureIgnoreCase(): System.StringComparer;
            public static get CurrentCulture(): System.StringComparer;
            public static get CurrentCultureIgnoreCase(): System.StringComparer;
            public static get Ordinal(): System.StringComparer;
            public static get OrdinalIgnoreCase(): System.StringComparer;
            public static FromComparison ($comparisonType: System.StringComparison) : System.StringComparer
            public static Create ($culture: System.Globalization.CultureInfo, $ignoreCase: boolean) : System.StringComparer
            public static Create ($culture: System.Globalization.CultureInfo, $options: System.Globalization.CompareOptions) : System.StringComparer
            public Compare ($x: any, $y: any) : number
            public Equals ($x: any, $y: any) : boolean
            public GetHashCode ($obj: any) : number
            public Compare ($x: string, $y: string) : number
            public Equals ($x: string, $y: string) : boolean
            public GetHashCode ($obj: string) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
        }
        class CultureAwareComparer extends System.StringComparer implements System.Collections.Generic.IEqualityComparer$1<string>, System.Collections.IEqualityComparer, System.Collections.Generic.IComparer$1<string>, System.Collections.IComparer, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
        }
        class OrdinalComparer extends System.StringComparer implements System.Collections.Generic.IEqualityComparer$1<string>, System.Collections.IEqualityComparer, System.Collections.Generic.IComparer$1<string>, System.Collections.IComparer
        {
            protected [__keep_incompatibility]: never;
        }
        class STAThreadAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class MTAThreadAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class ThreadStaticAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class TimeZone extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get CurrentTimeZone(): System.TimeZone;
            public get StandardName(): string;
            public get DaylightName(): string;
            public GetUtcOffset ($time: System.DateTime) : System.TimeSpan
            public ToUniversalTime ($time: System.DateTime) : System.DateTime
            public ToLocalTime ($time: System.DateTime) : System.DateTime
            public GetDaylightChanges ($year: number) : System.Globalization.DaylightTime
            public IsDaylightSavingTime ($time: System.DateTime) : boolean
            public static IsDaylightSavingTime ($time: System.DateTime, $daylightTimes: System.Globalization.DaylightTime) : boolean
        }
        class TimeZoneNotFoundException extends System.Exception implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class TimeoutException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Tuple extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Tuple$1<T1> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public constructor ($item1: T1)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        interface ITupleInternal extends System.Runtime.CompilerServices.ITuple
        {
        }
        class Tuple$2<T1, T2> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public constructor ($item1: T1, $item2: T2)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class Tuple$3<T1, T2, T3> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public get Item3(): T3;
            public constructor ($item1: T1, $item2: T2, $item3: T3)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class Tuple$4<T1, T2, T3, T4> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public get Item3(): T3;
            public get Item4(): T4;
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class Tuple$5<T1, T2, T3, T4, T5> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public get Item3(): T3;
            public get Item4(): T4;
            public get Item5(): T5;
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class Tuple$6<T1, T2, T3, T4, T5, T6> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public get Item3(): T3;
            public get Item4(): T4;
            public get Item5(): T5;
            public get Item6(): T6;
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class Tuple$7<T1, T2, T3, T4, T5, T6, T7> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public get Item3(): T3;
            public get Item4(): T4;
            public get Item5(): T5;
            public get Item6(): T6;
            public get Item7(): T7;
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class Tuple$8<T1, T2, T3, T4, T5, T6, T7, TRest> extends System.Object implements System.ITupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public get Item3(): T3;
            public get Item4(): T4;
            public get Item5(): T5;
            public get Item6(): T6;
            public get Item7(): T7;
            public get Rest(): TRest;
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7, $rest: TRest)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class TupleExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ValueTuple$1<T1> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$1<T1>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$1<T1>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$1<T1>) : boolean
            public CompareTo ($other: System.ValueTuple$1<T1>) : number
            public constructor ($item1: T1)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class ValueTuple$3<T1, T2, T3> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$3<T1, T2, T3>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$3<T1, T2, T3>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Item2 : T2
            public Item3 : T3
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$3<T1, T2, T3>) : boolean
            public CompareTo ($other: System.ValueTuple$3<T1, T2, T3>) : number
            public constructor ($item1: T1, $item2: T2, $item3: T3)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class ValueTuple$4<T1, T2, T3, T4> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$4<T1, T2, T3, T4>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$4<T1, T2, T3, T4>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Item2 : T2
            public Item3 : T3
            public Item4 : T4
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$4<T1, T2, T3, T4>) : boolean
            public CompareTo ($other: System.ValueTuple$4<T1, T2, T3, T4>) : number
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class ValueTuple$5<T1, T2, T3, T4, T5> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$5<T1, T2, T3, T4, T5>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$5<T1, T2, T3, T4, T5>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Item2 : T2
            public Item3 : T3
            public Item4 : T4
            public Item5 : T5
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$5<T1, T2, T3, T4, T5>) : boolean
            public CompareTo ($other: System.ValueTuple$5<T1, T2, T3, T4, T5>) : number
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class ValueTuple$6<T1, T2, T3, T4, T5, T6> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$6<T1, T2, T3, T4, T5, T6>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$6<T1, T2, T3, T4, T5, T6>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Item2 : T2
            public Item3 : T3
            public Item4 : T4
            public Item5 : T5
            public Item6 : T6
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$6<T1, T2, T3, T4, T5, T6>) : boolean
            public CompareTo ($other: System.ValueTuple$6<T1, T2, T3, T4, T5, T6>) : number
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class ValueTuple$7<T1, T2, T3, T4, T5, T6, T7> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Item2 : T2
            public Item3 : T3
            public Item4 : T4
            public Item5 : T5
            public Item6 : T6
            public Item7 : T7
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>) : boolean
            public CompareTo ($other: System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>) : number
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Item1 : T1
            public Item2 : T2
            public Item3 : T3
            public Item4 : T4
            public Item5 : T5
            public Item6 : T6
            public Item7 : T7
            public Rest : TRest
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>) : boolean
            public CompareTo ($other: System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>) : number
            public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7, $rest: TRest)
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
            public constructor ()
        }
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Value(): System.IntPtr;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public Equals ($obj: any) : boolean
            public Equals ($handle: System.RuntimeTypeHandle) : boolean
            public static op_Equality ($left: System.RuntimeTypeHandle, $right: any) : boolean
            public static op_Inequality ($left: System.RuntimeTypeHandle, $right: any) : boolean
            public static op_Equality ($left: any, $right: System.RuntimeTypeHandle) : boolean
            public static op_Inequality ($left: any, $right: System.RuntimeTypeHandle) : boolean
            public GetModuleHandle () : System.ModuleHandle
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class TypeAccessException extends System.TypeLoadException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class TypeInitializationException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get TypeName(): string;
            public constructor ($fullTypeName: string, $innerException: System.Exception)
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class TypeUnloadedException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class UnauthorizedAccessException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class UnhandledExceptionEventArgs extends System.EventArgs
        {
            protected [__keep_incompatibility]: never;
            public get ExceptionObject(): any;
            public get IsTerminating(): boolean;
            public constructor ($exception: any, $isTerminating: boolean)
            public constructor ()
        }
        interface UnhandledExceptionEventHandler
        { 
        (sender: any, e: System.UnhandledExceptionEventArgs) : void; 
        Invoke?: (sender: any, e: System.UnhandledExceptionEventArgs) => void;
        }
        var UnhandledExceptionEventHandler: { new (func: (sender: any, e: System.UnhandledExceptionEventArgs) => void): UnhandledExceptionEventHandler; }
        class ValueTuple extends System.ValueType implements System.IEquatable$1<System.ValueTuple>, System.IValueTupleInternal, System.IComparable, System.Collections.IStructuralComparable, System.IComparable$1<System.ValueTuple>, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple) : boolean
            public CompareTo ($other: System.ValueTuple) : number
            public static Create () : System.ValueTuple
            public CompareTo ($obj: any) : number
            public CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
            public Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            public GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
        }
        class Version extends System.Object implements System.IEquatable$1<System.Version>, System.ICloneable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.Version>
        {
            protected [__keep_incompatibility]: never;
            public get Major(): number;
            public get Minor(): number;
            public get Build(): number;
            public get Revision(): number;
            public get MajorRevision(): number;
            public get MinorRevision(): number;
            public Clone () : any
            public CompareTo ($version: any) : number
            public CompareTo ($value: System.Version) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: System.Version) : boolean
            public ToString () : string
            public ToString ($fieldCount: number) : string
            public static Parse ($input: string) : System.Version
            public static TryParse ($input: string, $result: $Ref<System.Version>) : boolean
            public static op_Equality ($v1: System.Version, $v2: System.Version) : boolean
            public static op_Inequality ($v1: System.Version, $v2: System.Version) : boolean
            public static op_LessThan ($v1: System.Version, $v2: System.Version) : boolean
            public static op_LessThanOrEqual ($v1: System.Version, $v2: System.Version) : boolean
            public static op_GreaterThan ($v1: System.Version, $v2: System.Version) : boolean
            public static op_GreaterThanOrEqual ($v1: System.Version, $v2: System.Version) : boolean
            public constructor ($major: number, $minor: number, $build: number, $revision: number)
            public constructor ($major: number, $minor: number, $build: number)
            public constructor ($major: number, $minor: number)
            public constructor ($version: string)
            public constructor ()
            public CompareTo ($obj: any) : number
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface IServiceProvider
        {
            GetService ($serviceType: System.Type) : any
        }
        interface ConsoleCancelEventHandler
        { 
        (sender: any, e: System.ConsoleCancelEventArgs) : void; 
        Invoke?: (sender: any, e: System.ConsoleCancelEventArgs) => void;
        }
        var ConsoleCancelEventHandler: { new (func: (sender: any, e: System.ConsoleCancelEventArgs) => void): ConsoleCancelEventHandler; }
        class ConsoleCancelEventArgs extends System.EventArgs
        {
            protected [__keep_incompatibility]: never;
            public get Cancel(): boolean;
            public set Cancel(value: boolean);
            public get SpecialKey(): System.ConsoleSpecialKey;
        }
        enum ConsoleSpecialKey
        { ControlC = 0, ControlBreak = 1 }
        enum ConsoleColor
        { Black = 0, DarkBlue = 1, DarkGreen = 2, DarkCyan = 3, DarkRed = 4, DarkMagenta = 5, DarkYellow = 6, Gray = 7, DarkGray = 8, Blue = 9, Green = 10, Cyan = 11, Red = 12, Magenta = 13, Yellow = 14, White = 15 }
        enum ConsoleKey
        { Backspace = 8, Tab = 9, Clear = 12, Enter = 13, Pause = 19, Escape = 27, Spacebar = 32, PageUp = 33, PageDown = 34, End = 35, Home = 36, LeftArrow = 37, UpArrow = 38, RightArrow = 39, DownArrow = 40, Select = 41, Print = 42, Execute = 43, PrintScreen = 44, Insert = 45, Delete = 46, Help = 47, D0 = 48, D1 = 49, D2 = 50, D3 = 51, D4 = 52, D5 = 53, D6 = 54, D7 = 55, D8 = 56, D9 = 57, A = 65, B = 66, C = 67, D = 68, E = 69, F = 70, G = 71, H = 72, I = 73, J = 74, K = 75, L = 76, M = 77, N = 78, O = 79, P = 80, Q = 81, R = 82, S = 83, T = 84, U = 85, V = 86, W = 87, X = 88, Y = 89, Z = 90, LeftWindows = 91, RightWindows = 92, Applications = 93, Sleep = 95, NumPad0 = 96, NumPad1 = 97, NumPad2 = 98, NumPad3 = 99, NumPad4 = 100, NumPad5 = 101, NumPad6 = 102, NumPad7 = 103, NumPad8 = 104, NumPad9 = 105, Multiply = 106, Add = 107, Separator = 108, Subtract = 109, Decimal = 110, Divide = 111, F1 = 112, F2 = 113, F3 = 114, F4 = 115, F5 = 116, F6 = 117, F7 = 118, F8 = 119, F9 = 120, F10 = 121, F11 = 122, F12 = 123, F13 = 124, F14 = 125, F15 = 126, F16 = 127, F17 = 128, F18 = 129, F19 = 130, F20 = 131, F21 = 132, F22 = 133, F23 = 134, F24 = 135, BrowserBack = 166, BrowserForward = 167, BrowserRefresh = 168, BrowserStop = 169, BrowserSearch = 170, BrowserFavorites = 171, BrowserHome = 172, VolumeMute = 173, VolumeDown = 174, VolumeUp = 175, MediaNext = 176, MediaPrevious = 177, MediaStop = 178, MediaPlay = 179, LaunchMail = 180, LaunchMediaSelect = 181, LaunchApp1 = 182, LaunchApp2 = 183, Oem1 = 186, OemPlus = 187, OemComma = 188, OemMinus = 189, OemPeriod = 190, Oem2 = 191, Oem3 = 192, Oem4 = 219, Oem5 = 220, Oem6 = 221, Oem7 = 222, Oem8 = 223, Oem102 = 226, Process = 229, Packet = 231, Attention = 246, CrSel = 247, ExSel = 248, EraseEndOfFile = 249, Play = 250, Zoom = 251, NoName = 252, Pa1 = 253, OemClear = 254 }
        class ConsoleKeyInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get KeyChar(): number;
            public get Key(): System.ConsoleKey;
            public get Modifiers(): System.ConsoleModifiers;
            public Equals ($value: any) : boolean
            public Equals ($obj: System.ConsoleKeyInfo) : boolean
            public static op_Equality ($a: System.ConsoleKeyInfo, $b: System.ConsoleKeyInfo) : boolean
            public static op_Inequality ($a: System.ConsoleKeyInfo, $b: System.ConsoleKeyInfo) : boolean
            public constructor ($keyChar: number, $key: System.ConsoleKey, $shift: boolean, $alt: boolean, $control: boolean)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        enum ConsoleModifiers
        { Alt = 1, Shift = 2, Control = 4 }
        class SequencePosition extends System.ValueType implements System.IEquatable$1<System.SequencePosition>
        {
            protected [__keep_incompatibility]: never;
            public GetObject () : any
            public GetInteger () : number
            public Equals ($other: System.SequencePosition) : boolean
            public Equals ($obj: any) : boolean
            public constructor ($object: any, $integer: number)
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class AppDomainUnloadedException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ApplicationId extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Culture(): string;
            public get Name(): string;
            public get ProcessorArchitecture(): string;
            public get Version(): System.Version;
            public get PublicKeyToken(): System.Array$1<number>;
            public Copy () : System.ApplicationId
            public constructor ($publicKeyToken: System.Array$1<number>, $name: string, $version: System.Version, $processorArchitecture: string, $culture: string)
            public constructor ()
        }
        class CannotUnloadAppDomainException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        enum LoaderOptimization
        { DisallowBindings = 4, DomainMask = 3, MultiDomain = 2, MultiDomainHost = 3, NotSpecified = 0, SingleDomain = 1 }
        class LoaderOptimizationAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public get Value(): System.LoaderOptimization;
            public constructor ($value: number)
            public constructor ($value: System.LoaderOptimization)
            public constructor ()
        }
        class OperatingSystem extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Platform(): System.PlatformID;
            public get ServicePack(): string;
            public get Version(): System.Version;
            public get VersionString(): string;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public Clone () : any
            public constructor ($platform: System.PlatformID, $version: System.Version)
            public constructor ()
        }
        enum PlatformID
        { Win32S = 0, Win32Windows = 1, Win32NT = 2, WinCE = 3, Unix = 4, Xbox = 5, MacOSX = 6 }
        class OutOfMemoryException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InsufficientMemoryException extends System.OutOfMemoryException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class MissingFieldException extends System.MissingMemberException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($className: string, $fieldName: string)
            public constructor ($className: string, $memberName: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class AppContext extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get BaseDirectory(): string;
            public static get TargetFrameworkName(): string;
            public static GetData ($name: string) : any
            public static TryGetSwitch ($switchName: string, $isEnabled: $Ref<boolean>) : boolean
            public static SetSwitch ($switchName: string, $isEnabled: boolean) : void
        }
        class LocalDataStoreSlot extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Activator extends System.Object implements System.Runtime.InteropServices._Activator
        {
            protected [__keep_incompatibility]: never;
            public static CreateInstance ($type: System.Type, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public static CreateInstance ($type: System.Type, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : any
            public static CreateInstance ($type: System.Type, ...args: any[]) : any
            public static CreateInstance ($type: System.Type, $args: System.Array$1<any>, $activationAttributes: System.Array$1<any>) : any
            public static CreateInstance ($type: System.Type) : any
            public static CreateInstance ($assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($type: System.Type, $nonPublic: boolean) : any
            public static CreateInstanceFrom ($assemblyFile: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstanceFrom ($assemblyFile: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstanceFrom ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($domain: System.AppDomain, $assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($domain: System.AppDomain, $assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstanceFrom ($domain: System.AppDomain, $assemblyFile: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstanceFrom ($domain: System.AppDomain, $assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateComInstanceFrom ($assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public static CreateComInstanceFrom ($assemblyName: string, $typeName: string, $hashValue: System.Array$1<number>, $hashAlgorithm: System.Configuration.Assemblies.AssemblyHashAlgorithm) : System.Runtime.Remoting.ObjectHandle
            public static GetObject ($type: System.Type, $url: string) : any
            public static GetObject ($type: System.Type, $url: string, $state: any) : any
            public static CreateInstance ($activationContext: System.ActivationContext) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($activationContext: System.ActivationContext, $activationCustomData: System.Array$1<string>) : System.Runtime.Remoting.ObjectHandle
        }
        class AppDomain extends System.MarshalByRefObject implements System.Security.IEvidenceFactory, System._AppDomain
        {
            protected [__keep_incompatibility]: never;
            public get SetupInformation(): System.AppDomainSetup;
            public get ApplicationTrust(): System.Security.Policy.ApplicationTrust;
            public get BaseDirectory(): string;
            public get RelativeSearchPath(): string;
            public get DynamicDirectory(): string;
            public get ShadowCopyFiles(): boolean;
            public get FriendlyName(): string;
            public get Evidence(): System.Security.Policy.Evidence;
            public get PermissionSet(): System.Security.PermissionSet;
            public static get CurrentDomain(): System.AppDomain;
            public get IsHomogenous(): boolean;
            public get IsFullyTrusted(): boolean;
            public get DomainManager(): System.AppDomainManager;
            public get ActivationContext(): System.ActivationContext;
            public get ApplicationIdentity(): System.ApplicationIdentity;
            public get Id(): number;
            public static get MonitoringIsEnabled(): boolean;
            public static set MonitoringIsEnabled(value: boolean);
            public get MonitoringSurvivedMemorySize(): bigint;
            public static get MonitoringSurvivedProcessMemorySize(): bigint;
            public get MonitoringTotalAllocatedMemorySize(): bigint;
            public get MonitoringTotalProcessorTime(): System.TimeSpan;
            public CreateComInstanceFrom ($assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public CreateComInstanceFrom ($assemblyFile: string, $typeName: string, $hashValue: System.Array$1<number>, $hashAlgorithm: System.Configuration.Assemblies.AssemblyHashAlgorithm) : System.Runtime.Remoting.ObjectHandle
            public CreateInstance ($assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public CreateInstance ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceAndUnwrap ($assemblyName: string, $typeName: string) : any
            public CreateInstanceAndUnwrap ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : any
            public CreateInstance ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceAndUnwrap ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : any
            public CreateInstanceFrom ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceFromAndUnwrap ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : any
            public CreateInstanceFrom ($assemblyFile: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceFrom ($assemblyFile: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceFromAndUnwrap ($assemblyName: string, $typeName: string) : any
            public CreateInstanceFromAndUnwrap ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : any
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $assemblyAttributes: System.Collections.Generic.IEnumerable$1<System.Reflection.Emit.CustomAttributeBuilder>) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $isSynchronized: boolean, $assemblyAttributes: System.Collections.Generic.IEnumerable$1<System.Reflection.Emit.CustomAttributeBuilder>) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $assemblyAttributes: System.Collections.Generic.IEnumerable$1<System.Reflection.Emit.CustomAttributeBuilder>, $securityContextSource: System.Security.SecurityContextSource) : System.Reflection.Emit.AssemblyBuilder
            public DoCallBack ($callBackDelegate: System.CrossAppDomainDelegate) : void
            public ExecuteAssembly ($assemblyFile: string) : number
            public ExecuteAssembly ($assemblyFile: string, $args: System.Array$1<string>) : number
            public ExecuteAssembly ($assemblyFile: string, $args: System.Array$1<string>, $hashValue: System.Array$1<number>, $hashAlgorithm: System.Configuration.Assemblies.AssemblyHashAlgorithm) : number
            public GetAssemblies () : System.Array$1<System.Reflection.Assembly>
            public GetData ($name: string) : any
            public GetType () : System.Type
            public Load ($assemblyRef: System.Reflection.AssemblyName) : System.Reflection.Assembly
            public Load ($assemblyString: string) : System.Reflection.Assembly
            public Load ($rawAssembly: System.Array$1<number>) : System.Reflection.Assembly
            public Load ($rawAssembly: System.Array$1<number>, $rawSymbolStore: System.Array$1<number>) : System.Reflection.Assembly
            public SetPrincipalPolicy ($policy: System.Security.Principal.PrincipalPolicy) : void
            public SetThreadPrincipal ($principal: System.Security.Principal.IPrincipal) : void
            public static CreateDomain ($friendlyName: string) : System.AppDomain
            public static CreateDomain ($friendlyName: string, $securityInfo: System.Security.Policy.Evidence) : System.AppDomain
            public static CreateDomain ($friendlyName: string, $securityInfo: System.Security.Policy.Evidence, $info: System.AppDomainSetup) : System.AppDomain
            public static CreateDomain ($friendlyName: string, $securityInfo: System.Security.Policy.Evidence, $appBasePath: string, $appRelativeSearchPath: string, $shadowCopyFiles: boolean) : System.AppDomain
            public static CreateDomain ($friendlyName: string, $securityInfo: System.Security.Policy.Evidence, $info: System.AppDomainSetup, $grantSet: System.Security.PermissionSet, ...fullTrustAssemblies: System.Security.Policy.StrongName[]) : System.AppDomain
            public IsFinalizingForUnload () : boolean
            public static Unload ($domain: System.AppDomain) : void
            public SetData ($name: string, $data: any) : void
            public SetData ($name: string, $data: any, $permission: System.Security.IPermission) : void
            public add_AssemblyLoad ($value: System.AssemblyLoadEventHandler) : void
            public remove_AssemblyLoad ($value: System.AssemblyLoadEventHandler) : void
            public add_AssemblyResolve ($value: System.ResolveEventHandler) : void
            public remove_AssemblyResolve ($value: System.ResolveEventHandler) : void
            public add_DomainUnload ($value: System.EventHandler) : void
            public remove_DomainUnload ($value: System.EventHandler) : void
            public add_ProcessExit ($value: System.EventHandler) : void
            public remove_ProcessExit ($value: System.EventHandler) : void
            public add_ResourceResolve ($value: System.ResolveEventHandler) : void
            public remove_ResourceResolve ($value: System.ResolveEventHandler) : void
            public add_TypeResolve ($value: System.ResolveEventHandler) : void
            public remove_TypeResolve ($value: System.ResolveEventHandler) : void
            public add_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            public remove_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            public add_FirstChanceException ($value: System.EventHandler$1<System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs>) : void
            public remove_FirstChanceException ($value: System.EventHandler$1<System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs>) : void
            public add_ReflectionOnlyAssemblyResolve ($value: System.ResolveEventHandler) : void
            public remove_ReflectionOnlyAssemblyResolve ($value: System.ResolveEventHandler) : void
            public ApplyPolicy ($assemblyName: string) : string
            public static CreateDomain ($friendlyName: string, $securityInfo: System.Security.Policy.Evidence, $appBasePath: string, $appRelativeSearchPath: string, $shadowCopyFiles: boolean, $adInit: System.AppDomainInitializer, $adInitArgs: System.Array$1<string>) : System.AppDomain
            public ExecuteAssemblyByName ($assemblyName: string) : number
            public ExecuteAssemblyByName ($assemblyName: string, ...args: string[]) : number
            public ExecuteAssemblyByName ($assemblyName: System.Reflection.AssemblyName, ...args: string[]) : number
            public IsDefaultAppDomain () : boolean
            public ReflectionOnlyGetAssemblies () : System.Array$1<System.Reflection.Assembly>
            public IsCompatibilitySwitchSet ($value: string) : boolean | null
            public GetTypeInfoCount ($pcTInfo: $Ref<number>) : void
            public GetTypeInfo ($iTInfo: number, $lcid: number, $ppTInfo: System.IntPtr) : void
            public GetIDsOfNames ($riid: $Ref<System.Guid>, $rgszNames: System.IntPtr, $cNames: number, $lcid: number, $rgDispId: System.IntPtr) : void
            public Invoke ($dispIdMember: number, $riid: $Ref<System.Guid>, $lcid: number, $wFlags: number, $pDispParams: System.IntPtr, $pVarResult: System.IntPtr, $pExcepInfo: System.IntPtr, $puArgErr: System.IntPtr) : void
            public Equals ($other: any) : boolean
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $evidence: System.Security.Policy.Evidence) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $evidence: System.Security.Policy.Evidence) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $evidence: System.Security.Policy.Evidence, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $evidence: System.Security.Policy.Evidence, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            public DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $evidence: System.Security.Policy.Evidence, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet, $isSynchronized: boolean) : System.Reflection.Emit.AssemblyBuilder
            public CreateInstance ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>, $securityAttributes: System.Security.Policy.Evidence) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceFrom ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>, $securityAttributes: System.Security.Policy.Evidence) : System.Runtime.Remoting.ObjectHandle
            public Load ($rawAssembly: System.Array$1<number>, $rawSymbolStore: System.Array$1<number>, $securityEvidence: System.Security.Policy.Evidence) : System.Reflection.Assembly
            public Load ($assemblyRef: System.Reflection.AssemblyName, $assemblySecurity: System.Security.Policy.Evidence) : System.Reflection.Assembly
            public Load ($assemblyString: string, $assemblySecurity: System.Security.Policy.Evidence) : System.Reflection.Assembly
            public ExecuteAssembly ($assemblyFile: string, $assemblySecurity: System.Security.Policy.Evidence) : number
            public ExecuteAssembly ($assemblyFile: string, $assemblySecurity: System.Security.Policy.Evidence, $args: System.Array$1<string>) : number
            public AppendPrivatePath ($path: string) : void
            public ClearPrivatePath () : void
            public SetShadowCopyPath ($s: string) : void
            public ClearShadowCopyPath () : void
            public SetCachePath ($s: string) : void
            public DoCallBack ($theDelegate: System.CrossAppDomainDelegate) : void
            public SetAppDomainPolicy ($domainPolicy: System.Security.Policy.PolicyLevel) : void
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface _AppDomain
        {
            FriendlyName : string
            BaseDirectory : string
            RelativeSearchPath : string
            ShadowCopyFiles : boolean
            DynamicDirectory : string
            Evidence : System.Security.Policy.Evidence
            GetTypeInfoCount ($pcTInfo: $Ref<number>) : void
            GetTypeInfo ($iTInfo: number, $lcid: number, $ppTInfo: System.IntPtr) : void
            GetIDsOfNames ($riid: $Ref<System.Guid>, $rgszNames: System.IntPtr, $cNames: number, $lcid: number, $rgDispId: System.IntPtr) : void
            Invoke ($dispIdMember: number, $riid: $Ref<System.Guid>, $lcid: number, $wFlags: number, $pDispParams: System.IntPtr, $pVarResult: System.IntPtr, $pExcepInfo: System.IntPtr, $puArgErr: System.IntPtr) : void
            ToString () : string
            Equals ($other: any) : boolean
            GetHashCode () : number
            GetType () : System.Type
            InitializeLifetimeService () : any
            GetLifetimeService () : any
            add_DomainUnload ($value: System.EventHandler) : void
            remove_DomainUnload ($value: System.EventHandler) : void
            add_AssemblyLoad ($value: System.AssemblyLoadEventHandler) : void
            remove_AssemblyLoad ($value: System.AssemblyLoadEventHandler) : void
            add_ProcessExit ($value: System.EventHandler) : void
            remove_ProcessExit ($value: System.EventHandler) : void
            add_TypeResolve ($value: System.ResolveEventHandler) : void
            remove_TypeResolve ($value: System.ResolveEventHandler) : void
            add_ResourceResolve ($value: System.ResolveEventHandler) : void
            remove_ResourceResolve ($value: System.ResolveEventHandler) : void
            add_AssemblyResolve ($value: System.ResolveEventHandler) : void
            remove_AssemblyResolve ($value: System.ResolveEventHandler) : void
            add_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            remove_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $evidence: System.Security.Policy.Evidence) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $evidence: System.Security.Policy.Evidence) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $evidence: System.Security.Policy.Evidence, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $evidence: System.Security.Policy.Evidence, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet) : System.Reflection.Emit.AssemblyBuilder
            DefineDynamicAssembly ($name: System.Reflection.AssemblyName, $access: System.Reflection.Emit.AssemblyBuilderAccess, $dir: string, $evidence: System.Security.Policy.Evidence, $requiredPermissions: System.Security.PermissionSet, $optionalPermissions: System.Security.PermissionSet, $refusedPermissions: System.Security.PermissionSet, $isSynchronized: boolean) : System.Reflection.Emit.AssemblyBuilder
            CreateInstance ($assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            CreateInstanceFrom ($assemblyFile: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            CreateInstance ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            CreateInstanceFrom ($assemblyFile: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            CreateInstance ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>, $securityAttributes: System.Security.Policy.Evidence) : System.Runtime.Remoting.ObjectHandle
            CreateInstanceFrom ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>, $securityAttributes: System.Security.Policy.Evidence) : System.Runtime.Remoting.ObjectHandle
            Load ($assemblyRef: System.Reflection.AssemblyName) : System.Reflection.Assembly
            Load ($assemblyString: string) : System.Reflection.Assembly
            Load ($rawAssembly: System.Array$1<number>) : System.Reflection.Assembly
            Load ($rawAssembly: System.Array$1<number>, $rawSymbolStore: System.Array$1<number>) : System.Reflection.Assembly
            Load ($rawAssembly: System.Array$1<number>, $rawSymbolStore: System.Array$1<number>, $securityEvidence: System.Security.Policy.Evidence) : System.Reflection.Assembly
            Load ($assemblyRef: System.Reflection.AssemblyName, $assemblySecurity: System.Security.Policy.Evidence) : System.Reflection.Assembly
            Load ($assemblyString: string, $assemblySecurity: System.Security.Policy.Evidence) : System.Reflection.Assembly
            ExecuteAssembly ($assemblyFile: string, $assemblySecurity: System.Security.Policy.Evidence) : number
            ExecuteAssembly ($assemblyFile: string) : number
            ExecuteAssembly ($assemblyFile: string, $assemblySecurity: System.Security.Policy.Evidence, $args: System.Array$1<string>) : number
            GetAssemblies () : System.Array$1<System.Reflection.Assembly>
            AppendPrivatePath ($path: string) : void
            ClearPrivatePath () : void
            SetShadowCopyPath ($s: string) : void
            ClearShadowCopyPath () : void
            SetCachePath ($s: string) : void
            SetData ($name: string, $data: any) : void
            GetData ($name: string) : any
            DoCallBack ($theDelegate: System.CrossAppDomainDelegate) : void
            SetAppDomainPolicy ($domainPolicy: System.Security.Policy.PolicyLevel) : void
            SetPrincipalPolicy ($policy: System.Security.Principal.PrincipalPolicy) : void
            SetThreadPrincipal ($principal: System.Security.Principal.IPrincipal) : void
        }
        class ActivationContext extends System.Object implements System.Runtime.Serialization.ISerializable, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public get Form(): System.ActivationContext.ContextForm;
            public get Identity(): System.ApplicationIdentity;
            public get ApplicationManifestBytes(): System.Array$1<number>;
            public get DeploymentManifestBytes(): System.Array$1<number>;
            public static CreatePartialActivationContext ($identity: System.ApplicationIdentity) : System.ActivationContext
            public static CreatePartialActivationContext ($identity: System.ApplicationIdentity, $manifestPaths: System.Array$1<string>) : System.ActivationContext
            public Dispose () : void
        }
        class Buffer extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ByteLength ($array: System.Array) : number
            public static GetByte ($array: System.Array, $index: number) : number
            public static SetByte ($array: System.Array, $index: number, $value: number) : void
            public static BlockCopy ($src: System.Array, $srcOffset: number, $dst: System.Array, $dstOffset: number, $count: number) : void
        }
        class ContextBoundObject extends System.MarshalByRefObject
        {
            protected [__keep_incompatibility]: never;
        }
        class ContextMarshalException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ContextStaticAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        enum GCCollectionMode
        { Default = 0, Forced = 1, Optimized = 2 }
        enum GCNotificationStatus
        { Succeeded = 0, Failed = 1, Canceled = 2, Timeout = 3, NotApplicable = 4 }
        class GC extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get MaxGeneration(): number;
            public static GetAllocatedBytesForCurrentThread () : bigint
            public static AddMemoryPressure ($bytesAllocated: bigint) : void
            public static RemoveMemoryPressure ($bytesAllocated: bigint) : void
            public static GetGeneration ($obj: any) : number
            public static Collect ($generation: number) : void
            public static Collect () : void
            public static Collect ($generation: number, $mode: System.GCCollectionMode) : void
            public static Collect ($generation: number, $mode: System.GCCollectionMode, $blocking: boolean) : void
            public static Collect ($generation: number, $mode: System.GCCollectionMode, $blocking: boolean, $compacting: boolean) : void
            public static CollectionCount ($generation: number) : number
            public static KeepAlive ($obj: any) : void
            public static GetGeneration ($wo: System.WeakReference) : number
            public static WaitForPendingFinalizers () : void
            public static SuppressFinalize ($obj: any) : void
            public static ReRegisterForFinalize ($obj: any) : void
            public static GetTotalMemory ($forceFullCollection: boolean) : bigint
            public static RegisterForFullGCNotification ($maxGenerationThreshold: number, $largeObjectHeapThreshold: number) : void
            public static CancelFullGCNotification () : void
            public static WaitForFullGCApproach () : System.GCNotificationStatus
            public static WaitForFullGCApproach ($millisecondsTimeout: number) : System.GCNotificationStatus
            public static WaitForFullGCComplete () : System.GCNotificationStatus
            public static WaitForFullGCComplete ($millisecondsTimeout: number) : System.GCNotificationStatus
            public static TryStartNoGCRegion ($totalSize: bigint) : boolean
            public static TryStartNoGCRegion ($totalSize: bigint, $lohSize: bigint) : boolean
            public static TryStartNoGCRegion ($totalSize: bigint, $disallowFullBlockingGC: boolean) : boolean
            public static TryStartNoGCRegion ($totalSize: bigint, $lohSize: bigint, $disallowFullBlockingGC: boolean) : boolean
            public static EndNoGCRegion () : void
        }
        class WeakReference extends System.Object implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get IsAlive(): boolean;
            public get Target(): any;
            public set Target(value: any);
            public get TrackResurrection(): boolean;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public constructor ($target: any)
            public constructor ($target: any, $trackResurrection: boolean)
            public constructor ()
        }
        interface CrossAppDomainDelegate
        { 
        () : void; 
        Invoke?: () => void;
        }
        var CrossAppDomainDelegate: { new (func: () => void): CrossAppDomainDelegate; }
        interface IAppDomainSetup
        {
            ApplicationBase : string
            ApplicationName : string
            CachePath : string
            ConfigurationFile : string
            DynamicBase : string
            LicenseFile : string
            PrivateBinPath : string
            PrivateBinPathProbe : string
            ShadowCopyDirectories : string
            ShadowCopyFiles : string
        }
        class TypedReference extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class AppDomainSetup extends System.Object implements System.IAppDomainSetup
        {
            protected [__keep_incompatibility]: never;
            public get ApplicationBase(): string;
            public set ApplicationBase(value: string);
            public get ApplicationName(): string;
            public set ApplicationName(value: string);
            public get CachePath(): string;
            public set CachePath(value: string);
            public get ConfigurationFile(): string;
            public set ConfigurationFile(value: string);
            public get DisallowPublisherPolicy(): boolean;
            public set DisallowPublisherPolicy(value: boolean);
            public get DynamicBase(): string;
            public set DynamicBase(value: string);
            public get LicenseFile(): string;
            public set LicenseFile(value: string);
            public get LoaderOptimization(): System.LoaderOptimization;
            public set LoaderOptimization(value: System.LoaderOptimization);
            public get AppDomainManagerAssembly(): string;
            public set AppDomainManagerAssembly(value: string);
            public get AppDomainManagerType(): string;
            public set AppDomainManagerType(value: string);
            public get PartialTrustVisibleAssemblies(): System.Array$1<string>;
            public set PartialTrustVisibleAssemblies(value: System.Array$1<string>);
            public get PrivateBinPath(): string;
            public set PrivateBinPath(value: string);
            public get PrivateBinPathProbe(): string;
            public set PrivateBinPathProbe(value: string);
            public get ShadowCopyDirectories(): string;
            public set ShadowCopyDirectories(value: string);
            public get ShadowCopyFiles(): string;
            public set ShadowCopyFiles(value: string);
            public get DisallowBindingRedirects(): boolean;
            public set DisallowBindingRedirects(value: boolean);
            public get DisallowCodeDownload(): boolean;
            public set DisallowCodeDownload(value: boolean);
            public get TargetFrameworkName(): string;
            public set TargetFrameworkName(value: string);
            public get ActivationArguments(): System.Runtime.Hosting.ActivationArguments;
            public set ActivationArguments(value: System.Runtime.Hosting.ActivationArguments);
            public get AppDomainInitializer(): System.AppDomainInitializer;
            public set AppDomainInitializer(value: System.AppDomainInitializer);
            public get AppDomainInitializerArguments(): System.Array$1<string>;
            public set AppDomainInitializerArguments(value: System.Array$1<string>);
            public get ApplicationTrust(): System.Security.Policy.ApplicationTrust;
            public set ApplicationTrust(value: System.Security.Policy.ApplicationTrust);
            public get DisallowApplicationBaseProbing(): boolean;
            public set DisallowApplicationBaseProbing(value: boolean);
            public get SandboxInterop(): boolean;
            public set SandboxInterop(value: boolean);
            public GetConfigurationBytes () : System.Array$1<number>
            public SetConfigurationBytes ($value: System.Array$1<number>) : void
            public SetCompatibilitySwitches ($switches: System.Collections.Generic.IEnumerable$1<string>) : void
            public SetNativeFunction ($functionName: string, $functionVersion: number, $functionPointer: System.IntPtr) : void
            public constructor ()
            public constructor ($activationArguments: System.Runtime.Hosting.ActivationArguments)
            public constructor ($activationContext: System.ActivationContext)
        }
        class AppDomainManager extends System.MarshalByRefObject
        {
            protected [__keep_incompatibility]: never;
            public get ApplicationActivator(): System.Runtime.Hosting.ApplicationActivator;
            public get EntryAssembly(): System.Reflection.Assembly;
            public get HostExecutionContextManager(): System.Threading.HostExecutionContextManager;
            public get HostSecurityManager(): System.Security.HostSecurityManager;
            public get InitializationFlags(): System.AppDomainManagerInitializationOptions;
            public set InitializationFlags(value: System.AppDomainManagerInitializationOptions);
            public CreateDomain ($friendlyName: string, $securityInfo: System.Security.Policy.Evidence, $appDomainInfo: System.AppDomainSetup) : System.AppDomain
            public InitializeNewDomain ($appDomainInfo: System.AppDomainSetup) : void
            public CheckSecuritySettings ($state: System.Security.SecurityState) : boolean
            public constructor ()
        }
        class ApplicationIdentity extends System.Object implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get CodeBase(): string;
            public get FullName(): string;
            public constructor ($applicationIdentityFullName: string)
            public constructor ()
        }
        interface AppDomainInitializer
        { 
        (args: System.Array$1<string>) : void; 
        Invoke?: (args: System.Array$1<string>) => void;
        }
        var AppDomainInitializer: { new (func: (args: System.Array$1<string>) => void): AppDomainInitializer; }
        class Environment extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get CommandLine(): string;
            public static get CurrentDirectory(): string;
            public static set CurrentDirectory(value: string);
            public static get CurrentManagedThreadId(): number;
            public static get ExitCode(): number;
            public static set ExitCode(value: number);
            public static get HasShutdownStarted(): boolean;
            public static get MachineName(): string;
            public static get NewLine(): string;
            public static get OSVersion(): System.OperatingSystem;
            public static get StackTrace(): string;
            public static get SystemDirectory(): string;
            public static get TickCount(): number;
            public static get UserDomainName(): string;
            public static get UserInteractive(): boolean;
            public static get UserName(): string;
            public static get Version(): System.Version;
            public static get WorkingSet(): bigint;
            public static get Is64BitOperatingSystem(): boolean;
            public static get SystemPageSize(): number;
            public static get Is64BitProcess(): boolean;
            public static get ProcessorCount(): number;
            public static Exit ($exitCode: number) : void
            public static ExpandEnvironmentVariables ($name: string) : string
            public static GetCommandLineArgs () : System.Array$1<string>
            public static GetEnvironmentVariable ($variable: string) : string
            public static GetEnvironmentVariables () : System.Collections.IDictionary
            public static GetFolderPath ($folder: System.Environment.SpecialFolder) : string
            public static GetFolderPath ($folder: System.Environment.SpecialFolder, $option: System.Environment.SpecialFolderOption) : string
            public static GetLogicalDrives () : System.Array$1<string>
            public static GetEnvironmentVariable ($variable: string, $target: System.EnvironmentVariableTarget) : string
            public static GetEnvironmentVariables ($target: System.EnvironmentVariableTarget) : System.Collections.IDictionary
            public static SetEnvironmentVariable ($variable: string, $value: string) : void
            public static SetEnvironmentVariable ($variable: string, $value: string, $target: System.EnvironmentVariableTarget) : void
            public static FailFast ($message: string) : void
            public static FailFast ($message: string, $exception: System.Exception) : void
        }
        enum EnvironmentVariableTarget
        { Process = 0, User = 1, Machine = 2 }
        enum AppDomainManagerInitializationOptions
        { None = 0, RegisterWithHost = 1 }
        class ArgIterator extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public End () : void
            public GetNextArgType () : System.RuntimeTypeHandle
            public GetRemainingCount () : number
        }
        class RuntimeArgumentHandle extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Console extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get Error(): System.IO.TextWriter;
            public static get Out(): System.IO.TextWriter;
            public static get In(): System.IO.TextReader;
            public static get InputEncoding(): System.Text.Encoding;
            public static set InputEncoding(value: System.Text.Encoding);
            public static get OutputEncoding(): System.Text.Encoding;
            public static set OutputEncoding(value: System.Text.Encoding);
            public static get BackgroundColor(): System.ConsoleColor;
            public static set BackgroundColor(value: System.ConsoleColor);
            public static get BufferHeight(): number;
            public static set BufferHeight(value: number);
            public static get BufferWidth(): number;
            public static set BufferWidth(value: number);
            public static get CapsLock(): boolean;
            public static get CursorLeft(): number;
            public static set CursorLeft(value: number);
            public static get CursorTop(): number;
            public static set CursorTop(value: number);
            public static get CursorSize(): number;
            public static set CursorSize(value: number);
            public static get CursorVisible(): boolean;
            public static set CursorVisible(value: boolean);
            public static get ForegroundColor(): System.ConsoleColor;
            public static set ForegroundColor(value: System.ConsoleColor);
            public static get KeyAvailable(): boolean;
            public static get LargestWindowHeight(): number;
            public static get LargestWindowWidth(): number;
            public static get NumberLock(): boolean;
            public static get Title(): string;
            public static set Title(value: string);
            public static get TreatControlCAsInput(): boolean;
            public static set TreatControlCAsInput(value: boolean);
            public static get WindowHeight(): number;
            public static set WindowHeight(value: number);
            public static get WindowLeft(): number;
            public static set WindowLeft(value: number);
            public static get WindowTop(): number;
            public static set WindowTop(value: number);
            public static get WindowWidth(): number;
            public static set WindowWidth(value: number);
            public static get IsErrorRedirected(): boolean;
            public static get IsOutputRedirected(): boolean;
            public static get IsInputRedirected(): boolean;
            public static OpenStandardError () : System.IO.Stream
            public static OpenStandardError ($bufferSize: number) : System.IO.Stream
            public static OpenStandardInput () : System.IO.Stream
            public static OpenStandardInput ($bufferSize: number) : System.IO.Stream
            public static OpenStandardOutput () : System.IO.Stream
            public static OpenStandardOutput ($bufferSize: number) : System.IO.Stream
            public static SetError ($newError: System.IO.TextWriter) : void
            public static SetIn ($newIn: System.IO.TextReader) : void
            public static SetOut ($newOut: System.IO.TextWriter) : void
            public static Write ($value: boolean) : void
            public static Write ($value: number) : void
            public static Write ($buffer: System.Array$1<number>) : void
            public static Write ($value: System.Decimal) : void
            public static Write ($value: bigint) : void
            public static Write ($value: any) : void
            public static Write ($value: string) : void
            public static Write ($format: string, $arg0: any) : void
            public static Write ($format: string, ...arg: any[]) : void
            public static Write ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static Write ($format: string, $arg0: any, $arg1: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any, $arg2: any, $arg3: any) : void
            public static WriteLine () : void
            public static WriteLine ($value: boolean) : void
            public static WriteLine ($value: number) : void
            public static WriteLine ($buffer: System.Array$1<number>) : void
            public static WriteLine ($value: System.Decimal) : void
            public static WriteLine ($value: bigint) : void
            public static WriteLine ($value: any) : void
            public static WriteLine ($value: string) : void
            public static WriteLine ($format: string, $arg0: any) : void
            public static WriteLine ($format: string, ...arg: any[]) : void
            public static WriteLine ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any, $arg2: any, $arg3: any) : void
            public static Read () : number
            public static ReadLine () : string
            public static Beep () : void
            public static Beep ($frequency: number, $duration: number) : void
            public static Clear () : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number) : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number, $sourceChar: number, $sourceForeColor: System.ConsoleColor, $sourceBackColor: System.ConsoleColor) : void
            public static ReadKey () : System.ConsoleKeyInfo
            public static ReadKey ($intercept: boolean) : System.ConsoleKeyInfo
            public static ResetColor () : void
            public static SetBufferSize ($width: number, $height: number) : void
            public static SetCursorPosition ($left: number, $top: number) : void
            public static SetWindowPosition ($left: number, $top: number) : void
            public static SetWindowSize ($width: number, $height: number) : void
            public static add_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
            public static remove_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
        }
        class ModuleHandle extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public static EmptyHandle : System.ModuleHandle
            public get MDStreamVersion(): number;
            public ResolveFieldHandle ($fieldToken: number) : System.RuntimeFieldHandle
            public ResolveMethodHandle ($methodToken: number) : System.RuntimeMethodHandle
            public ResolveTypeHandle ($typeToken: number) : System.RuntimeTypeHandle
            public ResolveTypeHandle ($typeToken: number, $typeInstantiationContext: System.Array$1<System.RuntimeTypeHandle>, $methodInstantiationContext: System.Array$1<System.RuntimeTypeHandle>) : System.RuntimeTypeHandle
            public ResolveMethodHandle ($methodToken: number, $typeInstantiationContext: System.Array$1<System.RuntimeTypeHandle>, $methodInstantiationContext: System.Array$1<System.RuntimeTypeHandle>) : System.RuntimeMethodHandle
            public ResolveFieldHandle ($fieldToken: number, $typeInstantiationContext: System.Array$1<System.RuntimeTypeHandle>, $methodInstantiationContext: System.Array$1<System.RuntimeTypeHandle>) : System.RuntimeFieldHandle
            public GetRuntimeFieldHandleFromMetadataToken ($fieldToken: number) : System.RuntimeFieldHandle
            public GetRuntimeMethodHandleFromMetadataToken ($methodToken: number) : System.RuntimeMethodHandle
            public GetRuntimeTypeHandleFromMetadataToken ($typeToken: number) : System.RuntimeTypeHandle
            public Equals ($obj: any) : boolean
            public Equals ($handle: System.ModuleHandle) : boolean
            public static op_Equality ($left: System.ModuleHandle, $right: System.ModuleHandle) : boolean
            public static op_Inequality ($left: System.ModuleHandle, $right: System.ModuleHandle) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class RuntimeFieldHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Value(): System.IntPtr;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public Equals ($obj: any) : boolean
            public Equals ($handle: System.RuntimeFieldHandle) : boolean
            public static op_Equality ($left: System.RuntimeFieldHandle, $right: System.RuntimeFieldHandle) : boolean
            public static op_Inequality ($left: System.RuntimeFieldHandle, $right: System.RuntimeFieldHandle) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class RuntimeMethodHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Value(): System.IntPtr;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetFunctionPointer () : System.IntPtr
            public Equals ($obj: any) : boolean
            public Equals ($handle: System.RuntimeMethodHandle) : boolean
            public static op_Equality ($left: System.RuntimeMethodHandle, $right: System.RuntimeMethodHandle) : boolean
            public static op_Inequality ($left: System.RuntimeMethodHandle, $right: System.RuntimeMethodHandle) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UIntPtr extends System.ValueType implements System.IEquatable$1<System.UIntPtr>, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public static Zero : System.UIntPtr
            public static get Size(): number;
            public ToUInt32 () : number
            public ToUInt64 () : bigint
            public static op_Equality ($value1: System.UIntPtr, $value2: System.UIntPtr) : boolean
            public static op_Inequality ($value1: System.UIntPtr, $value2: System.UIntPtr) : boolean
            public static op_Explicit ($value: System.UIntPtr) : bigint
            public static op_Explicit ($value: System.UIntPtr) : number
            public static op_Explicit ($value: bigint) : System.UIntPtr
            public static op_Explicit ($value: number) : System.UIntPtr
            public static Add ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public static Subtract ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public static op_Addition ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public static op_Subtraction ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public constructor ($value: bigint)
            public constructor ($value: number)
            public constructor ()
        }
        class WeakReference$1<T> extends System.Object implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public SetTarget ($target: T) : void
            public TryGetTarget ($target: $Ref<T>) : boolean
            public constructor ($target: T)
            public constructor ($target: T, $trackResurrection: boolean)
            public constructor ()
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
        {
            Current : T
            MoveNext () : boolean
            Reset () : void
            Dispose () : void
        }
        interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
        {
            Count : number
            IsReadOnly : boolean
            get_Item ($index: number) : T
            set_Item ($index: number, $value: T) : void
            IndexOf ($item: T) : number
            Insert ($index: number, $item: T) : void
            RemoveAt ($index: number) : void
            GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            GetEnumerator () : System.Collections.IEnumerator
            Add ($item: T) : void
            Clear () : void
            Contains ($item: T) : boolean
            CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            Remove ($item: T) : boolean
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            Count : number
            IsReadOnly : boolean
            Add ($item: T) : void
            Clear () : void
            Contains ($item: T) : boolean
            CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            Remove ($item: T) : boolean
            GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            Count : number
            GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
            Count : number
            get_Item ($index: number) : T
            GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IEqualityComparer$1<T>
        {
            Equals ($x: T, $y: T) : boolean
            GetHashCode ($obj: T) : number
        }
        interface IComparer$1<T>
        {
            Compare ($x: T, $y: T) : number
        }
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.IDictionary, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.ICollection, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Comparer(): System.Collections.Generic.IEqualityComparer$1<TKey>;
            public get Count(): number;
            public get Keys(): System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
            public get Values(): System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
            public get IsReadOnly(): boolean;
            public get IsFixedSize(): boolean;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public get_Item ($key: TKey) : TValue
            public set_Item ($key: TKey, $value: TValue) : void
            public Add ($key: TKey, $value: TValue) : void
            public Clear () : void
            public ContainsKey ($key: TKey) : boolean
            public ContainsValue ($value: TValue) : boolean
            public GetEnumerator () : System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public OnDeserialization ($sender: any) : void
            public Remove ($key: TKey) : boolean
            public Remove ($key: TKey, $value: $Ref<TValue>) : boolean
            public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
            public TryAdd ($key: TKey, $value: TValue) : boolean
            public EnsureCapacity ($capacity: number) : number
            public TrimExcess () : void
            public TrimExcess ($capacity: number) : void
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>)
            public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public get_Item ($key: any) : any
            public set_Item ($key: any, $value: any) : void
            public Contains ($key: any) : boolean
            public Add ($key: any, $value: any) : void
            public GetEnumerator () : System.Collections.IDictionaryEnumerator
            public Remove ($key: any) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public CopyTo ($array: System.Array, $index: number) : void
            public [Symbol.iterator]() : IterableIterator<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        }
        class KeyValuePair$2<TKey, TValue> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Key(): TKey;
            public get Value(): TValue;
            public Deconstruct ($key: $Ref<TKey>, $value: $Ref<TValue>) : void
            public constructor ($key: TKey, $value: TValue)
            public constructor ()
        }
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
            Keys : System.Collections.Generic.IEnumerable$1<TKey>
            Values : System.Collections.Generic.IEnumerable$1<TValue>
            ContainsKey ($key: TKey) : boolean
            TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
            get_Item ($key: TKey) : TValue
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
            Keys : System.Collections.Generic.ICollection$1<TKey>
            Values : System.Collections.Generic.ICollection$1<TValue>
            get_Item ($key: TKey) : TValue
            set_Item ($key: TKey, $value: TValue) : void
            ContainsKey ($key: TKey) : boolean
            Add ($key: TKey, $value: TValue) : void
            Remove ($key: TKey) : boolean
            TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IAsyncEnumerable$1<T>
        {
            GetAsyncEnumerator ($cancellationToken?: System.Threading.CancellationToken) : System.Collections.Generic.IAsyncEnumerator$1<T>
        }
        interface IAsyncEnumerator$1<T> extends System.IAsyncDisposable
        {
            Current : T
            MoveNextAsync () : System.Threading.Tasks.ValueTask$1<boolean>
            DisposeAsync () : System.Threading.Tasks.ValueTask
        }
        class KeyNotFoundException extends System.SystemException implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class KeyValuePair extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get IsReadOnly(): boolean;
            public get IsFixedSize(): boolean;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public Add ($item: T) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
            public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public BinarySearch ($item: T) : number
            public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>) : void
            public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public Exists ($match: System.Predicate$1<T>) : boolean
            public Find ($match: System.Predicate$1<T>) : T
            public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
            public FindIndex ($match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public FindLast ($match: System.Predicate$1<T>) : T
            public FindLastIndex ($match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public ForEach ($action: System.Action$1<T>) : void
            public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
            public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
            public IndexOf ($item: T) : number
            public IndexOf ($item: T, $index: number) : number
            public IndexOf ($item: T, $index: number, $count: number) : number
            public Insert ($index: number, $item: T) : void
            public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public LastIndexOf ($item: T) : number
            public LastIndexOf ($item: T, $index: number) : number
            public LastIndexOf ($item: T, $index: number, $count: number) : number
            public Remove ($item: T) : boolean
            public RemoveAll ($match: System.Predicate$1<T>) : number
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public Sort () : void
            public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($comparison: System.Comparison$1<T>) : void
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public TrueForAll ($match: System.Predicate$1<T>) : boolean
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            public GetEnumerator () : System.Collections.IEnumerator
            public get_Item ($index: number) : any
            public set_Item ($index: number, $value: any) : void
            public Add ($value: any) : number
            public Contains ($value: any) : boolean
            public IndexOf ($value: any) : number
            public Insert ($index: number, $value: any) : void
            public Remove ($value: any) : void
            public CopyTo ($array: System.Array, $index: number) : void
            public [Symbol.iterator]() : IterableIterator<T>
        }
        class CollectionExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Queue$1<T> extends System.Object implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Count(): number;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public Clear () : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public Enqueue ($item: T) : void
            public GetEnumerator () : System.Collections.Generic.Queue$1.Enumerator<T>
            public Dequeue () : T
            public TryDequeue ($result: $Ref<T>) : boolean
            public Peek () : T
            public TryPeek ($result: $Ref<T>) : boolean
            public Contains ($item: T) : boolean
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            public GetEnumerator () : System.Collections.IEnumerator
            public CopyTo ($array: System.Array, $index: number) : void
            public [Symbol.iterator]() : IterableIterator<T>
        }
        class Stack$1<T> extends System.Object implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Count(): number;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public GetEnumerator () : System.Collections.Generic.Stack$1.Enumerator<T>
            public TrimExcess () : void
            public Peek () : T
            public TryPeek ($result: $Ref<T>) : boolean
            public Pop () : T
            public TryPop ($result: $Ref<T>) : boolean
            public Push ($item: T) : void
            public ToArray () : System.Array$1<T>
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<T>
            public GetEnumerator () : System.Collections.IEnumerator
            public CopyTo ($array: System.Array, $index: number) : void
            public [Symbol.iterator]() : IterableIterator<T>
        }
        class Comparer$1<T> extends System.Object implements System.Collections.Generic.IComparer$1<T>, System.Collections.IComparer
        {
            protected [__keep_incompatibility]: never;
            public static get Default(): any;
            public static Create ($comparison: any) : any
            public Compare ($x: T, $y: T) : number
            public Compare ($x: any, $y: any) : number
        }
        class EqualityComparer$1<T> extends System.Object implements System.Collections.Generic.IEqualityComparer$1<T>, System.Collections.IEqualityComparer
        {
            protected [__keep_incompatibility]: never;
            public static get Default(): any;
            public Equals ($x: T, $y: T) : boolean
            public GetHashCode ($obj: T) : number
            public Equals ($x: any, $y: any) : boolean
            public GetHashCode ($obj: any) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : any
            public GetHashCode () : number
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IList extends System.Collections.IEnumerable, System.Collections.ICollection
        {
            IsReadOnly : boolean
            IsFixedSize : boolean
            Count : number
            SyncRoot : any
            IsSynchronized : boolean
            get_Item ($index: number) : any
            set_Item ($index: number, $value: any) : void
            Add ($value: any) : number
            Contains ($value: any) : boolean
            Clear () : void
            IndexOf ($value: any) : number
            Insert ($index: number, $value: any) : void
            Remove ($value: any) : void
            RemoveAt ($index: number) : void
            GetEnumerator () : System.Collections.IEnumerator
            CopyTo ($array: System.Array, $index: number) : void
        }
        interface ICollection extends System.Collections.IEnumerable
        {
            Count : number
            SyncRoot : any
            IsSynchronized : boolean
            CopyTo ($array: System.Array, $index: number) : void
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IStructuralComparable
        {
            CompareTo ($other: any, $comparer: System.Collections.IComparer) : number
        }
        interface IStructuralEquatable
        {
            Equals ($other: any, $comparer: System.Collections.IEqualityComparer) : boolean
            GetHashCode ($comparer: System.Collections.IEqualityComparer) : number
        }
        interface IEnumerator
        {
            Current : any
            MoveNext () : boolean
            Reset () : void
        }
        interface IEqualityComparer
        {
            Equals ($x: any, $y: any) : boolean
            GetHashCode ($obj: any) : number
        }
        interface IComparer
        {
            Compare ($x: any, $y: any) : number
        }
        interface IDictionary extends System.Collections.IEnumerable, System.Collections.ICollection
        {
            Keys : System.Collections.ICollection
            Values : System.Collections.ICollection
            IsReadOnly : boolean
            IsFixedSize : boolean
            Count : number
            SyncRoot : any
            IsSynchronized : boolean
            get_Item ($key: any) : any
            set_Item ($key: any, $value: any) : void
            Contains ($key: any) : boolean
            Add ($key: any, $value: any) : void
            Clear () : void
            GetEnumerator () : System.Collections.IDictionaryEnumerator
            Remove ($key: any) : void
            GetEnumerator () : System.Collections.IEnumerator
            CopyTo ($array: System.Array, $index: number) : void
        }
        class Comparer extends System.Object implements System.Runtime.Serialization.ISerializable, System.Collections.IComparer
        {
            protected [__keep_incompatibility]: never;
            public static Default : System.Collections.Comparer
            public static DefaultInvariant : System.Collections.Comparer
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public Compare ($a: any, $b: any) : number
            public constructor ($culture: System.Globalization.CultureInfo)
            public Compare ($x: any, $y: any) : number
            public constructor ()
        }
        class DictionaryEntry extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Key(): any;
            public set Key(value: any);
            public get Value(): any;
            public set Value(value: any);
            public Deconstruct ($key: $Ref<any>, $value: $Ref<any>) : void
            public constructor ($key: any, $value: any)
            public constructor ()
        }
        interface IDictionaryEnumerator extends System.Collections.IEnumerator
        {
            Key : any
            Value : any
            Entry : System.Collections.DictionaryEntry
            Current : any
            MoveNext () : boolean
            Reset () : void
        }
        class CaseInsensitiveComparer extends System.Object implements System.Collections.IComparer
        {
            protected [__keep_incompatibility]: never;
            public static get Default(): System.Collections.CaseInsensitiveComparer;
            public static get DefaultInvariant(): System.Collections.CaseInsensitiveComparer;
            public Compare ($a: any, $b: any) : number
            public constructor ()
            public constructor ($culture: System.Globalization.CultureInfo)
            public Compare ($x: any, $y: any) : number
        }
        class CaseInsensitiveHashCodeProvider extends System.Object implements System.Collections.IHashCodeProvider
        {
            protected [__keep_incompatibility]: never;
            public static get Default(): System.Collections.CaseInsensitiveHashCodeProvider;
            public static get DefaultInvariant(): System.Collections.CaseInsensitiveHashCodeProvider;
            public GetHashCode ($obj: any) : number
            public constructor ()
            public constructor ($culture: System.Globalization.CultureInfo)
            public GetHashCode () : number
        }
        interface IHashCodeProvider
        {
            GetHashCode ($obj: any) : number
        }
        class CollectionBase extends System.Object implements System.Collections.IEnumerable, System.Collections.IList, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get IsReadOnly(): boolean;
            public get IsFixedSize(): boolean;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public Clear () : void
            public RemoveAt ($index: number) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public get_Item ($index: number) : any
            public set_Item ($index: number, $value: any) : void
            public Add ($value: any) : number
            public Contains ($value: any) : boolean
            public IndexOf ($value: any) : number
            public Insert ($index: number, $value: any) : void
            public Remove ($value: any) : void
            public CopyTo ($array: System.Array, $index: number) : void
        }
        class DictionaryBase extends System.Object implements System.Collections.IDictionary, System.Collections.IEnumerable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Count(): number;
            public get Keys(): System.Collections.ICollection;
            public get Values(): System.Collections.ICollection;
            public get IsReadOnly(): boolean;
            public get IsFixedSize(): boolean;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public CopyTo ($array: System.Array, $index: number) : void
            public Clear () : void
            public GetEnumerator () : System.Collections.IDictionaryEnumerator
            public get_Item ($key: any) : any
            public set_Item ($key: any, $value: any) : void
            public Contains ($key: any) : boolean
            public Add ($key: any, $value: any) : void
            public Remove ($key: any) : void
            public GetEnumerator () : System.Collections.IEnumerator
        }
        class Queue extends System.Object implements System.Collections.IEnumerable, System.ICloneable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Count(): number;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public Clone () : any
            public Clear () : void
            public CopyTo ($array: System.Array, $index: number) : void
            public Enqueue ($obj: any) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public Dequeue () : any
            public Peek () : any
            public static Synchronized ($queue: System.Collections.Queue) : System.Collections.Queue
            public Contains ($obj: any) : boolean
            public ToArray () : System.Array$1<any>
            public TrimToSize () : void
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($capacity: number, $growFactor: number)
            public constructor ($col: System.Collections.ICollection)
        }
        class ReadOnlyCollectionBase extends System.Object implements System.Collections.IEnumerable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Count(): number;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public GetEnumerator () : System.Collections.IEnumerator
            public CopyTo ($array: System.Array, $index: number) : void
        }
        class SortedList extends System.Object implements System.Collections.IDictionary, System.Collections.IEnumerable, System.ICloneable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get Keys(): System.Collections.ICollection;
            public get Values(): System.Collections.ICollection;
            public get IsReadOnly(): boolean;
            public get IsFixedSize(): boolean;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public Add ($key: any, $value: any) : void
            public Clear () : void
            public Clone () : any
            public Contains ($key: any) : boolean
            public ContainsKey ($key: any) : boolean
            public ContainsValue ($value: any) : boolean
            public CopyTo ($array: System.Array, $arrayIndex: number) : void
            public GetByIndex ($index: number) : any
            public GetEnumerator () : System.Collections.IDictionaryEnumerator
            public GetKey ($index: number) : any
            public GetKeyList () : System.Collections.IList
            public GetValueList () : System.Collections.IList
            public get_Item ($key: any) : any
            public set_Item ($key: any, $value: any) : void
            public IndexOfKey ($key: any) : number
            public IndexOfValue ($value: any) : number
            public RemoveAt ($index: number) : void
            public Remove ($key: any) : void
            public SetByIndex ($index: number, $value: any) : void
            public static Synchronized ($list: System.Collections.SortedList) : System.Collections.SortedList
            public TrimToSize () : void
            public constructor ()
            public constructor ($initialCapacity: number)
            public constructor ($comparer: System.Collections.IComparer)
            public constructor ($comparer: System.Collections.IComparer, $capacity: number)
            public constructor ($d: System.Collections.IDictionary)
            public constructor ($d: System.Collections.IDictionary, $comparer: System.Collections.IComparer)
            public GetEnumerator () : System.Collections.IEnumerator
            public CopyTo ($array: System.Array, $index: number) : void
        }
        class Stack extends System.Object implements System.Collections.IEnumerable, System.ICloneable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Count(): number;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public Clear () : void
            public Clone () : any
            public Contains ($obj: any) : boolean
            public CopyTo ($array: System.Array, $index: number) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public Peek () : any
            public Pop () : any
            public Push ($obj: any) : void
            public static Synchronized ($stack: System.Collections.Stack) : System.Collections.Stack
            public ToArray () : System.Array$1<any>
            public constructor ()
            public constructor ($initialCapacity: number)
            public constructor ($col: System.Collections.ICollection)
        }
        class BitArray extends System.Object implements System.Collections.IEnumerable, System.ICloneable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Length(): number;
            public set Length(value: number);
            public get Count(): number;
            public get SyncRoot(): any;
            public get IsSynchronized(): boolean;
            public get IsReadOnly(): boolean;
            public get_Item ($index: number) : boolean
            public set_Item ($index: number, $value: boolean) : void
            public Get ($index: number) : boolean
            public Set ($index: number, $value: boolean) : void
            public SetAll ($value: boolean) : void
            public And ($value: System.Collections.BitArray) : System.Collections.BitArray
            public Or ($value: System.Collections.BitArray) : System.Collections.BitArray
            public Xor ($value: System.Collections.BitArray) : System.Collections.BitArray
            public Not () : System.Collections.BitArray
            public RightShift ($count: number) : System.Collections.BitArray
            public LeftShift ($count: number) : System.Collections.BitArray
            public CopyTo ($array: System.Array, $index: number) : void
            public Clone () : any
            public GetEnumerator () : System.Collections.IEnumerator
            public constructor ($length: number)
            public constructor ($length: number, $defaultValue: boolean)
            public constructor ($bytes: System.Array$1<number>)
            public constructor ($values: System.Array$1<boolean>)
            public constructor ($values: System.Array$1<number>)
            public constructor ($bits: System.Collections.BitArray)
            public constructor ()
        }
        class StructuralComparisons extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get StructuralComparer(): System.Collections.IComparer;
            public static get StructuralEqualityComparer(): System.Collections.IEqualityComparer;
        }
        class ArrayList extends System.Object implements System.Collections.IEnumerable, System.ICloneable, System.Collections.IList, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get IsFixedSize(): boolean;
            public get IsReadOnly(): boolean;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public get_Item ($index: number) : any
            public set_Item ($index: number, $value: any) : void
            public static Adapter ($list: System.Collections.IList) : System.Collections.ArrayList
            public Add ($value: any) : number
            public AddRange ($c: System.Collections.ICollection) : void
            public BinarySearch ($index: number, $count: number, $value: any, $comparer: System.Collections.IComparer) : number
            public BinarySearch ($value: any) : number
            public BinarySearch ($value: any, $comparer: System.Collections.IComparer) : number
            public Clear () : void
            public Clone () : any
            public Contains ($item: any) : boolean
            public CopyTo ($array: System.Array) : void
            public CopyTo ($array: System.Array, $arrayIndex: number) : void
            public CopyTo ($index: number, $array: System.Array, $arrayIndex: number, $count: number) : void
            public static FixedSize ($list: System.Collections.IList) : System.Collections.IList
            public static FixedSize ($list: System.Collections.ArrayList) : System.Collections.ArrayList
            public GetEnumerator () : System.Collections.IEnumerator
            public GetEnumerator ($index: number, $count: number) : System.Collections.IEnumerator
            public IndexOf ($value: any) : number
            public IndexOf ($value: any, $startIndex: number) : number
            public IndexOf ($value: any, $startIndex: number, $count: number) : number
            public Insert ($index: number, $value: any) : void
            public InsertRange ($index: number, $c: System.Collections.ICollection) : void
            public LastIndexOf ($value: any) : number
            public LastIndexOf ($value: any, $startIndex: number) : number
            public LastIndexOf ($value: any, $startIndex: number, $count: number) : number
            public static ReadOnly ($list: System.Collections.IList) : System.Collections.IList
            public static ReadOnly ($list: System.Collections.ArrayList) : System.Collections.ArrayList
            public Remove ($obj: any) : void
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public static Repeat ($value: any, $count: number) : System.Collections.ArrayList
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public SetRange ($index: number, $c: System.Collections.ICollection) : void
            public GetRange ($index: number, $count: number) : System.Collections.ArrayList
            public Sort () : void
            public Sort ($comparer: System.Collections.IComparer) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.IComparer) : void
            public static Synchronized ($list: System.Collections.IList) : System.Collections.IList
            public static Synchronized ($list: System.Collections.ArrayList) : System.Collections.ArrayList
            public ToArray () : System.Array$1<any>
            public ToArray ($type: System.Type) : System.Array
            public TrimToSize () : void
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($c: System.Collections.ICollection)
            public Contains ($value: any) : boolean
            public Remove ($value: any) : void
            public CopyTo ($array: System.Array, $index: number) : void
        }
        class Hashtable extends System.Object implements System.Collections.IDictionary, System.Collections.IEnumerable, System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Collections.ICollection, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get IsReadOnly(): boolean;
            public get IsFixedSize(): boolean;
            public get IsSynchronized(): boolean;
            public get Keys(): System.Collections.ICollection;
            public get Values(): System.Collections.ICollection;
            public get SyncRoot(): any;
            public get Count(): number;
            public Add ($key: any, $value: any) : void
            public Clear () : void
            public Clone () : any
            public Contains ($key: any) : boolean
            public ContainsKey ($key: any) : boolean
            public ContainsValue ($value: any) : boolean
            public CopyTo ($array: System.Array, $arrayIndex: number) : void
            public get_Item ($key: any) : any
            public set_Item ($key: any, $value: any) : void
            public GetEnumerator () : System.Collections.IDictionaryEnumerator
            public Remove ($key: any) : void
            public static Synchronized ($table: System.Collections.Hashtable) : System.Collections.Hashtable
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public OnDeserialization ($sender: any) : void
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($capacity: number, $loadFactor: number)
            public constructor ($capacity: number, $loadFactor: number, $equalityComparer: System.Collections.IEqualityComparer)
            public constructor ($equalityComparer: System.Collections.IEqualityComparer)
            public constructor ($capacity: number, $equalityComparer: System.Collections.IEqualityComparer)
            public constructor ($d: System.Collections.IDictionary)
            public constructor ($d: System.Collections.IDictionary, $loadFactor: number)
            public constructor ($d: System.Collections.IDictionary, $equalityComparer: System.Collections.IEqualityComparer)
            public constructor ($d: System.Collections.IDictionary, $loadFactor: number, $equalityComparer: System.Collections.IEqualityComparer)
            public GetEnumerator () : System.Collections.IEnumerator
            public CopyTo ($array: System.Array, $index: number) : void
        }
    }
}
