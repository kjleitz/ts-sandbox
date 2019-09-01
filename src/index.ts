import invert from './invert';
import JiveScript from 'jivescript';

const foo: string = 'wait, dude';

console.log(`${foo}... is that ${invert(false)}?`);

const js = new JiveScript();
(window as any).js = js;

js.hear('yay', () => {
  js.say('sweet');
});
