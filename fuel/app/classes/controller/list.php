<?php
class Controller_List extends Controller_Rest{

  public function get_list(){

    //Générer un tableau qui contient tous les accès
    $clients = array();
    $data = array();

    //Charger la liste des clients
    $clients = Model_Client::find_all();

    foreach($clients as $key => $client){

       //Charger la liste des projets du client
       $projects = Model_Project::find_all();
       $projectsArray = array();
       foreach ($projects as $key => $project) {
          $projectsArray[] = array( 'id' => $project['id'],
                                     'name' => $project['name'],
                                  );
       }

       $data[] = array( 'id' => $client['id'],
                        'name' => $client['name'],
                        'projects' => $projectsArray,
                    );


    }

    //$data = (object)$data;

    return $this->response($data);
  }
}
