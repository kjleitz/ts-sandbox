import invert from './invert';
import JiveScript from 'jivescript';

const foo: string = 'wait, dude'; // eslint-disable-line @typescript-eslint/no-inferrable-types

console.log(`${foo}... is that ${invert(false)}?`);

const js = new JiveScript();
(window as any).js = js;

js.hear('yay', () => {
  js.say('sweet');
});
