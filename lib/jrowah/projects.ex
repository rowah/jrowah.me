defmodule Jrowah.Projects do
  @moduledoc """
  The Projects context.
  """

  use NimblePublisher,
    build: Jrowah.Projects.Project,
    from: Application.app_dir(:jrowah, "priv/resources/projects/*.md"),
    as: :projects,
    html_converter: Jrowah.MarkdownConverter

  @spec list_projects() :: list
  def list_projects, do: @projects
end
