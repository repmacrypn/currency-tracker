import { IObserver } from '@/components/ChartObserver/interface'
import { PopUp } from '@/components/ChartPopUp'
import { ICurrencyTimeline } from '@/types/timeline'

export class Subject {
  private observers: IObserver[] = []

  private data: ICurrencyTimeline[]

  constructor(data: ICurrencyTimeline[]) {
    this.data = data
  }

  public processData(): void {
    this.notifyObservers()
  }

  public registerObserver(observer: IObserver): void {
    this.observers.push(observer)
  }

  public removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer)

    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update()
    }
  }
}

export abstract class Observer {
  private subject: Subject

  constructor(subject: Subject) {
    this.subject = subject
    this.subject.registerObserver(this)
  }

  public abstract update(): void

  public unsubscribe(): void {
    this.subject.removeObserver(this)
  }
}

export class ChartObserver extends Observer {
  public update() {
    const activePopUp = new PopUp({})

    activePopUp.renderComponent()
  }
}
