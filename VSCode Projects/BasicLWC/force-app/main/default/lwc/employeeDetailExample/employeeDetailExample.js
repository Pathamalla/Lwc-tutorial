import { LightningElement,track } from 'lwc';

export default class EmployeeDetailExample extends LightningElement {
    @track name;
    @track age;
    @track phone;
    @track email;
    @track salary;
    nameHandler (event)
    {
    this.name=event.target.value;
}
ageHandler(event)
{
    this.age=event.target.value;
}
phoneHandler(event)
{
    this.phone=event.target.value;
}
emailHandler(event)
{
this.email=event.target.value;
}
salaryHandler(event)
{
    this.salary=event.target.value
}
}