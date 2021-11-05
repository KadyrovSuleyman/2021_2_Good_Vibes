export default class View {
  public self: HTMLElement;

  protected context: object;

  public isActive(): boolean {
    if (this.self.style.visibility === 'visible') {
      return true;
    }
    if (this.self.style.visibility === 'hidden') {
      return false;
    }
    return undefined;
  }

  public hide(): void {
    this.self.style.visibility = 'hidden';
    this.self.hidden = true;
  }

  public show(): void {
    this.self.style.visibility = 'visible';
    this.self.hidden = false;
  }

  public delete(): void {
    this.self.innerHTML = '';
  }

  public setContext(context: object): void {
    this.context = context;
  }
}
