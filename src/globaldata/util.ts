function jsonIfHasNullItem(items: any): boolean {
    const returnFlag = true;
// tslint:disable-next-line: forin
    for (const item in items) {
        console.log(items[item]);
        if (!items[item]) {
            return false;
        }
    }
    return returnFlag;
}

export { jsonIfHasNullItem };
