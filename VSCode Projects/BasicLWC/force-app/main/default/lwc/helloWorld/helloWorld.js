import { LightningElement,track} from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting ="shyamsunder";
changeHandle(event)
{
    this.greeting=event.target.value;
}
}