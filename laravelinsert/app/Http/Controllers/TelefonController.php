<?php

namespace App\Http\Controllers;

use App\Models\Telefon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TelefonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('numbers')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = DB::table('numbers')->insertGetId([
            'name' => $request->name,
            'phone' => $request->phone
        ]);

        return response()->json($id);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\telefon  $telefon
     * @return \Illuminate\Http\Response
     */
    public function show(telefon $telefon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\telefon  $telefon
     * @return \Illuminate\Http\Response
     */
    public function edit(telefon $telefon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\telefon  $telefon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::table('numbers')->where('id', $id)->update([
            'name' => $request->name,
            'phone' => $request->phone
        ]);

        if ($request->is("api/*")){
            return true;
        }else{
            return redirect()->back();
        }
        //        $contactList = DB::table('contacts')->get();
        //        return view('pages.contact.create', compact("contactList"));
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\telefon  $telefon
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('numbers')->where("id",$id)->delete();
        return response()->json();
    }
}
