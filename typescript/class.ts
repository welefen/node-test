
/**
 * base adapter
 */
export default class {
  async printDelayed(elements: string[]) {
      for (const element of elements) {
          await this.delay(200);
          console.log(element);
      }
  }
  async delay(milliseconds: number){
      return new Promise<void>(resolve => {
          setTimeout(resolve, milliseconds);
      });
  }

}
