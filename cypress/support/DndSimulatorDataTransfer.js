export default class DndSimulatorDataTransfer {

  constructor() {
    this.data = {};
    this.dropEffect = 'move';
    this.effectAllowed = 'all';
    this.files = [];
    this.items = [];
    this.types = [];
  }

  clearData(format) {
    if (format) {
      delete this.data[format]

      const index = this.types.indexOf(format)
      delete this.types[index]
      delete this.data[index]
    } else {
      this.data = {}
    }
  }

  setData(format, data) {
    this.data[format] = data
    this.items.push(data)
    this.types.push(format)
  }

  getData(format) {
    if (format in this.data) {
      return this.data[format]
    }

    return ''
  }

  setDragImage(img, xOffset, yOffset) {}
}