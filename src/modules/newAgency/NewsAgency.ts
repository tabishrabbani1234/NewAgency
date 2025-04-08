import { Observer } from "../interfaces/Observer.js";
import { Subject } from "../interfaces/Subject.js";

// 3. Concrete Subject (News Agency)
export class NewsAgency implements Subject {
    private observers: Observer[] = [];
    private latestNews: string = "";
  
    attach(observer: Observer): void {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    }
  
    detach(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify(): void {
      for (const observer of this.observers) {
        observer.update(this.latestNews);
      }
    }
  
    publishNews(news: string): void {
      this.latestNews = news;
      this.notify();
    }
  }