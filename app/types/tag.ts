namespace NTag {
  export interface Tag {
    id: string,
    name: string,
  }
  export type Tags = Array<Tag>

  export type VerifiedTag = Tag & {
    duplicated?: boolean
  }
  export type VerifiedTags = Array<VerifiedTag>
}

export default NTag;
