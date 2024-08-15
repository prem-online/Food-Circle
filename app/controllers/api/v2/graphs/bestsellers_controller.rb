module Api::V2::Graphs
  class BestsellersController < Api::V2::ApplicationController
    def labels
      result = bestseller_graph.labels
      render json: { data: result }, status: :ok
    end

    def sales
      result = bestseller_graph.sales(name)
      render json: { data: result }, status: :ok
    end

    private

    def bestseller_graph
      BestsellerGraph.new(@current_user)
    end

    def name
      params[:name]
    end
  end
end
