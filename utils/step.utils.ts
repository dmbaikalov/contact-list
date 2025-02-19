import * as allure from "allure-js-commons";



export function step(stepName?: string) {
    return function decorator(
        tar: Function,
        context: ClassMethodDecoratorContext,
    ) {
        return async function replacementMethod(this: any, ...args: any) {
            const className = this.constructor.name;
            const sName = stepName
                ? stepName.replace(/\${(.*?)}/g, (_, match) => {
                    try {
                        return new Function(...args.map((_, i) => `arg${i}`), `return ${match};`)(...args).toString();
                    } catch {
                        return `{${match}}`;
                    }
                }).replace("_PageName_", className)
                : `${className}.${String(context.name)}`;

            return await allure.step(sName, async () => {
                return await tar.apply(this, args);
            });
        };
    };
}