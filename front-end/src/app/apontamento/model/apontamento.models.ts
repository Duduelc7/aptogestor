export class Apontamento {
  constructor(
    public id:number,
    public story_id: string,
    public data_apto: Date,
    public vlr_apto: number
  ) { }
}
