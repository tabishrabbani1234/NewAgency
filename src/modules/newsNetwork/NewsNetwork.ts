import { Observer } from "../interfaces/Observer.js";

export class NewsNetwork implements Observer {
    private children: Observer[] = [];
  
    addChild(child: Observer): void {
      this.children.push(child);
    }
  
    removeChild(child: Observer): void {
      const index = this.children.indexOf(child);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  
    update(message: string): void {
      console.log(`[Parent Network] Received news: ${message}`);
      this.children.forEach(child => child.update(message));
    }
  }
  
  // 5. Concrete Child Observers
  export class LocalNewsStation implements Observer {
    update(message: string): void {
      console.log(`[Local Station] Broadcasting: ${message}`);
    }
  }
  
  export class InternationalNewsChannel implements Observer {
    update(message: string): void {
      console.log(`[International Channel] Reporting: ${message}`);
    }
  }