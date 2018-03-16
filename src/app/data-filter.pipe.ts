import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

    public transform(array: any[], query: string): any {
        if (query) {
            const transformedArray = [];
            for (const row of array) {
                if (this.match(row, query)) {
                    transformedArray.push(row);
                }
            }
            return transformedArray;
        }
        return array;
    }

    private match(row: any, query: string) {

        query = query.toLowerCase();

        for (const key in row) {

            if (row[key] instanceof Function) {
                continue;
            }

            if (row[key] instanceof Object) {
                if (this.match(row[key], query)) {
                    return true;
                }
            }

            if (row[key] && row[key].toString().toLowerCase().indexOf(query) > -1) {
                return true;
            }
        }

        return false;
    }
}
