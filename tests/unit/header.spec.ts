import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import { createStore } from "vuex";

describe("Header.vue", () => {
  const store = createStore({
    state: {
      favourites: [],
    },
    getters: {
      favourites: (state) => state.favourites,
    },
  });

  test("count should be 0", () => {
    const path = "Characters";
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [store],
        mocks: {
          $route: {
            params: { path },
          },
        },
      },
    });
    expect(wrapper.get(".cart__count").text()).toEqual("0");
  });
});
