import generateAlphabeticName from './generateAlphabeticName';
import { hash } from './hash';
export default function generateComponentId(str) {
    return generateAlphabeticName(hash(str) >>> 0);
}
