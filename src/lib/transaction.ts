export class Transaction {
    public sourceWalletID: string
    public targetWalletID: string
    public value: number
    public fee: number = Math.round((Math.random()*100)) / 1000

    constructor(sourceWalletID: string, targetWalletID: string, value: number) {
        this.sourceWalletID = sourceWalletID
        this.targetWalletID = targetWalletID
        this.value = value
    }

    public outputHTML(): string {
        let html = `<p style="flex-basis: 100%; margin-top: 5px"><span style="color: red">${this.sourceWalletID}</span> to <span style="color: red">${this.targetWalletID}</span>: <span style="color: lightblue">${this.value}BYC</span> Fee: <span style="color: lightblue">${this.fee}BYC</span></p>`
        return html
    }
}

