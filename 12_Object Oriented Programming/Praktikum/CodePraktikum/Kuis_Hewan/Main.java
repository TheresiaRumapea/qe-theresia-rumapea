package Kuis_Hewan;

public class Main {
    public static void main(String[] args) {
        //Create objek harimau
        Harimau harimau = new Harimau();

        harimau.makan("Harimau");
        harimau.caraBerkembangBiak();
        harimau.bergerak(4);
        harimau.kecepatan(96);
        System.out.println("=======================================");

        //Create objek ayam
        Ayam ayam = new Ayam();

        ayam.makan("Ayam");
        ayam.caraBerkembangBiak();
        ayam.bergerak(2);
        ayam.terbang();
        System.out.println("=======================================");

        //Create objek ikan
        Ikan ikan = new Ikan();

        ikan.makan("Ikan");
        ikan.caraBerkembangBiak();
        ikan.bergerak(0);
        ikan.ketahanan();
        System.out.println("=======================================");
    }
}
