export class ModalPreview {
    sections: Array<Section>;
    constructor() {
        this.sections = new Array<Section>();
    }
}

class Section {
    name: string;
    content: Array<Content>;
    constructor() {
        this.content = new Array<Content>();
    }
}

class Content {
    title: string;
    content: string;
}
