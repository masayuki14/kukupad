export enum MaskPosition {
  Left,
  Right,
  Outcome,
  None
}

export enum MaskType {
  Left,
  Right,
  Outcome,
  None,
  Random
}

export function convertType(maskType?: MaskType | undefined): MaskPosition {
  const position = ((): MaskPosition => {
    if (maskType === MaskType.Random) {
      const v = Math.floor(Math.random() * 10000) % 3
      switch (v) {
        case 0:
          return MaskPosition.Left
        case 1:
          return MaskPosition.Right
        case 2:
          return MaskPosition.Outcome
        case 3:
          return MaskPosition.None
      }
      return MaskPosition.Outcome
    }

    switch (maskType) {
      case MaskType.Left:
        return MaskPosition.Left
      case MaskType.Right:
        return MaskPosition.Right
      case MaskType.Outcome:
        return MaskPosition.Outcome
      case MaskType.None:
        return MaskPosition.None
    }
    return MaskPosition.Outcome
  })()

  return position
}

export enum SortDirection {
  Asc,
  Desc,
  Random
}

export enum MultiplyStep {
  Nine = 9,
  Sixteen = 16,
  Twenty = 20
}
