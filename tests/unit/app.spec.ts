import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "@/router";
import Characters from "@/views/Characters.vue";
import Favourites from "@/views/Favourites.vue";

jest.mock("@/components/Header.vue", () => ({
  name: "Header",
  template: "<div />",
}));

jest.mock("@/views/Characters.vue", () => ({
  name: "Characters",
  template: "<div />",
}));

jest.mock("@/views/Favourites.vue", () => ({
  name: "Favourites",
  template: "<div />",
}));

describe("App", () => {
  it("should render the Character component", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push("/Characters");
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(Characters).exists()).toBe(true);
  });

  it("should render the Favourites component", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push("/Favourites");
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(Favourites).exists()).toBe(true);
  });
});
