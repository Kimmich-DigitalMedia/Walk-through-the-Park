describe("Toasts:",function(){var t=375,e=300,a;describe("Toast javascript functions",function(){it("should display and remove a toast",function(s){Materialize.toast("Test toast",e),setTimeout(function(){a=$(".toast"),expect(a.length).toBe(1),expect(a).toBeVisible(),expect(a.text()).toBe("Test toast"),setTimeout(function(){a=$(".toast"),expect(a).toBeVisible(),expect(a.length).toBe(1,"because toast duration still on going"),setTimeout(function(){a=$(".toast"),expect(a.length).toBe(0,"because toast should be removed by now"),s()},t+90)},10)},e)}),it("Opens a toast with HTML content",function(){var t=$("<span>I am toast content</span>");Materialize.toast(t,400),a=$(".toast"),expect(a.first("span").text()).toBe("I am toast content"),expect(a.first("span").text()).not.toBe("I am toast")}),it("Toasts should call the callback function when dismissed",function(t){var e={wasCalled:!1},a=function(){e.wasCalled=!0};Materialize.toast("I am a toast",100,"",a),setTimeout(function(){expect(e.wasCalled).toBe(!0,"because the callback set it to true"),t()},500)}),it("Apply two custom class to a toast",function(){Materialize.toast("Hi",400,"round flat"),a=$(".toast"),expect(a.closest(".round.flat").length).toBe(1,"because the class parameter was passed with two classes")})})});