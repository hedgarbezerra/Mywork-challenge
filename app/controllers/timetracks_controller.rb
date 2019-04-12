class TimetracksController < ApplicationController
  before_action :set_timetrack, only: [:show, :edit, :update, :destroy]
  before_action :require_logged_in_user
    # GET /timetracks
  # GET /timetracks.json
  def index

    if  params[:search].present?
      @search = params[:search]
      @timetracks = Timetrack.where("id LIKE CAST (:search AS INTEGER) OR user_id LIKE CAST (:search AS INTEGER)", search: {@search})  
    else 
       @timetracks = Timetrack.all
     end
    
  end
   
  
  # GET /timetracks/1
  # GET /timetracks/1.json
  def show
  end

  # GET /timetracks/new
  def new
    @timetrack = Timetrack.new
  end

  # GET /timetracks/1/edit
  def edit
  end

  # POST /timetracks
  # POST /timetracks.json
  def create
    @timetrack = Timetrack.new(timetrack_params)

    respond_to do |format|
      if @timetrack.save
        format.html { redirect_to @timetrack, success: 'Savepoint was successfully created.'}
        format.json { render :show, status: :created, timetrack: @timetrack }
      else
        format.html { render :new }
        format.json { render json: @timetrack.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /timetracks/1
  # PATCH/PUT /timetracks/1.json
  def update
    respond_to do |format|
      if @timetrack.update(timetrack_params)
        format.html { redirect_to @timetrack, success: 'Savepoint was successfully created.'}
        format.json { render :show, status: :ok, timetrack: @timetrack }
      else
        format.html { render :edit }
        format.json { render json: @timetrack.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /timetracks/1
  # DELETE /timetracks/1.json
  def destroy
    @timetrack.destroy
    respond_to do |format|
      redirect_to @timetrack, warning: 'Guess you destroyed it.'
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_timetrack
      @timetrack = Timetrack.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def timetrack_params
    @user = current_user.id
      params.require(:timetrack).permit(:longitude, :latitude, :comment , :user_id)
    end
end
