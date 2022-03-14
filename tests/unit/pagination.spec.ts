import { shallowMount, mount } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";
import { createStore } from "vuex";

describe("Pagination.vue", () => {
  const store = createStore({
    state: {
      pageInfo: {
        pages: 30,
        next: "https://rickandmortyapi.com/api/character/?page=3",
        prev: "https://rickandmortyapi.com/api/character/?page=1",
      },
      pageNumber: 2,
    },
    getters: {
      pageInfo: (state) => state.pageInfo,
      pageNumber: (state) => state.pageNumber,
    },
    actions: {
      getCharacters: jest.fn(),
      getUrlParams: jest.fn(),
      getPageNumber: jest.fn(),
    },
  });
  test("should display current page number", () => {
    const wrapper = shallowMount(Pagination, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.get(".pageNumber").text()).toEqual("Page 2 of 30");
  });
  test("should called actions with next page number", async () => {
    store.dispatch = jest.fn();

    const wrapper = mount(Pagination, {
      global: {
        plugins: [store],
      },
    });

    wrapper.find(".next").trigger("click");
    await wrapper.vm.$nextTick();
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalledWith("getPageNumber", "3");
    expect(store.dispatch).toHaveBeenCalledWith("getUrlParams", { page: "3" });
    expect(store.dispatch).toHaveBeenCalledWith("getCharacters");
  });

  test("should called actions with prev page number", async () => {
    store.dispatch = jest.fn();

    const wrapper = mount(Pagination, {
      global: {
        plugins: [store],
      },
    });

    wrapper.find(".prev").trigger("click");
    await wrapper.vm.$nextTick();
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalledWith("getPageNumber", "1");
    expect(store.dispatch).toHaveBeenCalledWith("getUrlParams", { page: "1" });
    expect(store.dispatch).toHaveBeenCalledWith("getCharacters");
  });
});
