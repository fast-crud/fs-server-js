export class EnumItem {
  value: string;
  label: string;
  color: string;
  remark: string;

  constructor(value, label, color,remark?) {
    this.value = value;
    this.label = label;
    this.color = color;
    this.remark = remark
  }
}
