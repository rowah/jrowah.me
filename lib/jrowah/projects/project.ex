defmodule Jrowah.Projects.Project do
  @moduledoc """
  A resource representing a project.
  """

  @enforce_keys [:id, :title, :link, :link_label, :body, :description]
  defstruct id: "",
            title: "",
            link: "",
            link_label: "",
            description: "",
            body: ""

  @type t :: %__MODULE__{}

  @spec build(String.t(), map(), String.t()) :: %__MODULE__{}
  def build(filename, attrs, body) do
    id =
      filename
      |> Path.rootname()
      |> Path.split()
      |> List.last()

    struct!(
      __MODULE__,
      [id: id, body: body] ++ Map.to_list(attrs)
    )
  end
end
