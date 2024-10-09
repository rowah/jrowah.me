defmodule JrowahWeb.AboutLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  describe "/about" do
    test "renders about page", %{conn: conn} do
      {:ok, page_live, html} = live(conn, "/about")

      assert page_live

      assert html =~
               "I have experience working with Elixir, Phoenix, Postgres, LiveView, and TailwindCSS, along with UI libraries like Flowbite and TailwindUI."
    end

    test "clicking the home link takes you to the home page", %{conn: conn} do
      {:ok, home_live, _html} = live(conn, "/about")

      assert {:error, {:live_redirect, %{kind: :push, to: "/"}}} =
               home_live
               |> element(~s|a:fl-contains("Home")|)
               |> render_click()
    end

    test "clicking the projects link takes you to the projects page", %{conn: conn} do
      {:ok, home_live, _html} = live(conn, "/about")

      assert {:error, {:live_redirect, %{kind: :push, to: "/projects"}}} =
               home_live
               |> element(~s|a:fl-contains("Projects")|)
               |> render_click()
    end

    test "clicking the blog link takes you to the blog page", %{conn: conn} do
      {:ok, home_live, _html} = live(conn, "/about")

      assert {:error, {:live_redirect, %{kind: :push, to: "/blog"}}} =
               home_live
               |> element(~s|a:fl-contains("Blog")|)
               |> render_click()

      # TODO: Test the newly rendered liveview
    end

    test "disconnected and connected render", %{conn: conn} do
      {:ok, page_live, disconnected_html} = live(conn, "/about")
      assert disconnected_html =~ "About"
      assert render(page_live) =~ "About"
    end
  end
end
