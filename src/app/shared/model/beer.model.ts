export class BeerModel {
    type: string;
    maxTemperature: number;
    minTemperature: number;
    temperature: number;
    warning: string;

    constructor(
        type: string,
        maxTemperature: number,
        minTemperature: number,
        temperature: number,
        warning: string
    ) {
        this.type = type;
        this.maxTemperature = maxTemperature;
        this.minTemperature = minTemperature;
        this.temperature = temperature;
        this.warning = warning;
    }
}
