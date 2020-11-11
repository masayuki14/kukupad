export enum MaskPosition {
  Left,
  Right,
  Outcome
}

export enum MaskType {
  Left,
  Right,
  Outcome,
  Random
}

export function convertType(maskType?: MaskType | undefined): MaskPosition {
  let position = (function (): MaskPosition {
    if (maskType === MaskType.Random) {
      let v = Math.floor((Math.random() * 10000)) % 3
      switch (v) {
        case 0:
          return MaskPosition.Left
        case 1:
          return MaskPosition.Right
        case 2:
          return MaskPosition.Outcome
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