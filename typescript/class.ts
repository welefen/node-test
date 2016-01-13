
/**
 * base adapter
 */
export default class {
  list = [1, 2, 3];
  async printDelayed(elements: string[]) {
      for (const element of elements) {
          await this.delay(200);
          console.log(element);
      }
  }
  async delay(milliseconds: number, ...args: any[]){
      return new Promise<void>(resolve => {
          setTimeout(resolve, milliseconds);
      });
  }

}
