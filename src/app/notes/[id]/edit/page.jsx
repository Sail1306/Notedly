'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function EditNotePage({ params }) {
  const { id } = params;
  const router = useRouter();
  const { toast } = useToast();

  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      router.push("/");
      return;
    }
    setToken(storedToken);

    const fetchNote = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        if (!res.ok) throw new Error("Catatan tidak ditemukan");

        const { data } = await res.json();
        setNote(data);
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        toast({
          title: "Gagal mengambil catatan",
          description: "Pastikan catatan tersedia.",
        });
      }
    };

    fetchNote();
  }, [id, toast, router]);

  const handleUpdate = async () => {
    if (!title.trim() || !content.trim()) {
      toast({
        variant: "destructive",
        title: "Gagal menyimpan",
        description: "Judul dan isi tidak boleh kosong.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id_notes: id,
          id_user: note.id_user,
          title,
          content,
        }),
      });

      if (!res.ok) throw new Error("Gagal memperbarui catatan");

      toast({
        className: cn("bg-green-500", "text-white"),
        title: "Catatan diperbarui",
        description: "Perubahan telah disimpan.",
      });

      router.push("/notes");
    } catch (error) {
      toast({
        title: "Gagal menyimpan",
        description: "Terjadi kesalahan saat memperbarui catatan.",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <Card className="min-h-[200px] max-w-md rounded-lg border md:min-w-[1300px] mx-auto py-8 space-y-4 items-center mt-10 px-7 text-blue-950">
      <h1 className="text-3xl text-center font-bold">Edit Catatan</h1>
      <div>
        <Label htmlFor="title" className="ml-2 block text-lg font-medium mb-1">
          Judul
        </Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="content" className="ml-2 block text-lg font-medium mb-1">
          Isi
        </Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
        />
      </div>
      <div className="flex justify-between gap-8z">
        <Button variant="secondary" className="bg-slate-200 hover:bg-slate-300 text-blue-950" onClick={() => router.back()}>
          Batal
        </Button>
        <Button className="bg-orange-500 text-white" onClick={handleUpdate} disabled={loading}>
          {loading ? "Memperbarui" : "Perbarui"}
        </Button>
      </div>
    </Card>
    </div>
  );
}