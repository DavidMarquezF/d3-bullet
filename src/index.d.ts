
// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module plugin template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */
 /*~ On this line, import the module which this module adds to */
 import { Selection, namespace } from 'd3';
declare module "d3-bullet" {

   

    /*~ Here, declare the same module as the one you imported above */
    export function bullet(): Bullet;

    export type BulletOrientations = "right" | "left" | "top" | "bottom";

    export interface Bullet {
        (sel: Selection<SVGGElement, unknown, any, unknown>): void;
        orient(): BulletOrientations;
        orient(orientation: BulletOrientations): Bullet;
        ranges(): any;
        ranges(ranges: any): Bullet;
        markers(): any;
        markers(markers: any): Bullet;
        measures(): any;
        measures(measures: any): Bullet;
        width(): number;
        width(w: number): Bullet;
        height(): number;
        height(h: number): Bullet;
        /**
        * Returns the currently set tick format function, which defaults to null.
        */
        tickFormat(): ((domainValue: number, index: number) => string) | null;

        /**
         * Sets the tick format function and returns the axis.
         *
         * @param format A function mapping a value from the axis Domain to a formatted string
         * for display purposes. When invoked, the format function is also passed a second argument representing the zero-based index
         * of the tick label in the array of generated tick labels.
         */
        tickFormat(format: (domainValue: number, index: number) => string): this;

        /**
         * Reset the tick format function. A null format indicates that the scale’s
         * default formatter should be used, which is generated by calling scale.tickFormat.
         * In this case, the arguments specified by axis.tickArguments
         * are likewise passed to scale.tickFormat.
         *
         * @param format null
         */
        tickFormat(format: null): this;
    }
}
