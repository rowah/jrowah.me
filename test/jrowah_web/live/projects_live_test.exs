defmodule JrowahWeb.ProjectsLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  describe "/projects" do
    test "renders projects page", %{conn: conn} do
      {:ok, _projects_live, html} = live(conn, "/projects")

      assert html =~ "These are the projects I have worked on."
    end

    test "has nav links that are clickable and lead to the correct pages", %{conn: conn} do
      {:ok, _projects_live, html} = live(conn, "/projects")

      assert html =~ "Home"
      assert html =~ "href=\"/\""

      assert html =~ "About"
      assert html =~ "href=\"/about\""

      assert html =~ "Blog"
      assert html =~ "href=\"/blog\""
    end

    test "has links to other social media", %{conn: conn} do
      {:ok, _projects_live, html} = live(conn, "/projects")

      assert html =~ "GitHub"
      assert html =~ "href=\"https://github.com/rowah\""

      assert html =~ "LinkedIn"
      assert html =~ "href=\"https://www.linkedin.com/in/james-rowa/\""

      assert html =~ "Twitter"
      assert html =~ "href=\"https://twitter.com/jrowah\""

      # assert html =~ "Email"
      # assert html =~ "href=\"mailto:JlQpW@example.com\""
    end

    test "clicking the about link takes you to the about page", %{conn: conn} do
      {:ok, projects_live, _html} = live(conn, "/projects")

      assert {:error, {:live_redirect, %{kind: :push, to: "/about"}}} =
               projects_live
               |> element(~s|.desktop-about-link|)
               |> render_click()
    end

    test "clicking the home link takes you to the projects page", %{conn: conn} do
      {:ok, projects_live, _html} = live(conn, "/")

      assert {:error, {:live_redirect, %{kind: :push, to: "/"}}} =
               projects_live
               |> element(~s|.desktop-home-link|)
               |> render_click()
    end

    test "clicking the blog link takes you to the blog page", %{conn: conn} do
      {:ok, projects_live, _html} = live(conn, "/projects")

      assert {:error, {:live_redirect, %{kind: :push, to: "/blog"}}} =
               projects_live
               |> element(~s|.desktop-blog-link|)
               |> render_click()

      # TODO: Test the newly rendered liveview
    end

    test "disconnected and connected render", %{conn: conn} do
      {:ok, page_live, disconnected_html} = live(conn, "/projects")
      assert disconnected_html =~ "Home"
      assert render(page_live) =~ "Home"
    end
  end

  describe "projects" do
    test "renders projects", %{conn: conn} do
      {:ok, projects_live, _html} = live(conn, "/projects")
      assert has_element?(projects_live, ~s|.project-card|)
    end
  end
end
