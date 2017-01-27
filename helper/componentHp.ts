import { objHp } from './';

export namespace componentHp {
    export const createTopProps = <T extends {}>(props: T) => {
        return objHp.assign(
            {
                key: undefined,
                ref: undefined
            },
            props
        );
    }
}