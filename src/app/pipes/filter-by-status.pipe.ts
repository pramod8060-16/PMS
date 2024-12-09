import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(tasks: any[], status: string): any[] {
    if (!status) return tasks;
    return tasks.filter(task => task.status === status);
  }
}
