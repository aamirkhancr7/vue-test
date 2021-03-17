import { createLocalVue, shallowMount } from '@vue/test-utils';
// Components
import Home from '@/views/Home';
// Libraries
import vuetify from 'vuetify';
import Vue from 'vue';
Vue.use(vuetify);

Vue.use(vuetify);

describe('Home', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(vuetify);

        wrapper = shallowMount(Home, {
            localVue
        });
    });

    it('Renders the Home Vue Instance', () => {
        expect(shallowMount(Home).exists()).toBe(true);
    });
});
